#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

// 현재 파일의 경로를 계산
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 프로젝트 복사를 위한 유틸리티 함수
async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

const args = process.argv.slice(2);
const projectName = args[0] || 'my-new-project';
const templatePath = path.resolve(__dirname, '../template');
const targetPath = path.resolve(process.cwd(), projectName);

async function createProject() {
  try {
    console.log(`Creating project ${projectName}...`);

    // 프로젝트 디렉토리 생성 및 템플릿 파일 복사
    await copyDir(templatePath, targetPath);

    console.log('Installing dependencies...');
    process.chdir(targetPath);
    execSync('npm install', { stdio: 'inherit' });

    console.log('Project setup complete!');
  } catch (err) {
    console.error('Error creating project:', err);
  }
}

createProject();
