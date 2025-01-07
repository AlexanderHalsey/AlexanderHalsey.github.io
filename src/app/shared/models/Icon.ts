import { InputSignal } from '@angular/core';

import { AngularIconComponent } from '@/assets/icons/angular-icon.component';
import { ArrowRightIconComponent } from '@/assets/icons/arrow-right-icon.component';
import { AzureDevopsIconComponent } from '@/assets/icons/azure-devops-icon.component';
import { BackendDevelopmentIconComponent } from '@/assets/icons/backend-development-icon.component';
import { CiCdIconComponent } from '@/assets/icons/ci-cd-icon.component';
import { ComputerIconComponent } from '@/assets/icons/computer-icon.component';
import { CssIconComponent } from '@/assets/icons/css-icon.component';
import { CypressIconComponent } from '@/assets/icons/cypress-icon.component';
import { DayIconComponent } from '@/assets/icons/day-icon.component';
import { DjangoIconComponent } from '@/assets/icons/django-icon.component';
import { DockerIconComponent } from '@/assets/icons/docker-icon.component';
import { E2ETestingIconComponent } from '@/assets/icons/e2e-testing-icon.component';
import { GitIconComponent } from '@/assets/icons/git-icon.component';
import { GithubIconComponent } from '@/assets/icons/github-icon.component';
import { HamburgerIconComponent } from '@/assets/icons/hamburger-icon.component';
import { HtmlIconComponent } from '@/assets/icons/html-icon.component';
import { JavascriptIconComponent } from '@/assets/icons/javascript-icon.component';
import { JestIconComponent } from '@/assets/icons/jest-icon.component';
import { LinkedInIconComponent } from '@/assets/icons/linkedin-icon.component';
import { MobileDevelopmentIconComponent } from '@/assets/icons/mobile-development-icon.component';
import { NestIconComponent } from '@/assets/icons/nest-icon.component';
import { NodeIconComponent } from '@/assets/icons/node-icon.component';
import { NpmIconComponent } from '@/assets/icons/npm-icon.component';
import { NightIconComponent } from '@/assets/icons/night-icon.component';
import { PhoneIconComponent } from '@/assets/icons/phone-icon.component';
import { PostgresqlIconComponent } from '@/assets/icons/postgresql-icon.component';
import { PythonIconComponent } from '@/assets/icons/python-icon.component';
import { ReactIconComponent } from '@/assets/icons/react-icon.component';
import { SassIconComponent } from '@/assets/icons/sass-icon.component';
import { TailwindcssIconComponent } from '@/assets/icons/tailwindcss-icon.component';
import { TypescriptIconComponent } from '@/assets/icons/typescript-icon.component';
import { ViteIconComponent } from '@/assets/icons/vite-icon.component';
import { VueIconComponent } from '@/assets/icons/vue-icon.component';
import { WebDevelopmentIconComponent } from '@/assets/icons/web-development-icon.component';
import { SendIconComponent } from '@/assets/icons/send-icon.component';

export const ICON_OPTIONS = [
  { name: 'angular', component: AngularIconComponent, allowAnimate: true },
  { name: 'arrow-right', component: ArrowRightIconComponent },
  { name: 'azure-devops', component: AzureDevopsIconComponent, allowAnimate: true },
  { name: 'backend-development', component: BackendDevelopmentIconComponent },
  { name: 'ci-cd-pipelines', component: CiCdIconComponent },
  { name: 'computer', component: ComputerIconComponent },
  { name: 'css', component: CssIconComponent, allowAnimate: true },
  { name: 'cypress', component: CypressIconComponent, allowAnimate: true },
  { name: 'day', component: DayIconComponent },
  { name: 'django', component: DjangoIconComponent, allowAnimate: true },
  { name: 'docker', component: DockerIconComponent, allowAnimate: true },
  { name: 'e2e-testing', component: E2ETestingIconComponent },
  { name: 'git', component: GitIconComponent, allowAnimate: true },
  { name: 'github', component: GithubIconComponent },
  { name: 'hamburger', component: HamburgerIconComponent },
  { name: 'html', component: HtmlIconComponent, allowAnimate: true },
  { name: 'javascript', component: JavascriptIconComponent, allowAnimate: true },
  { name: 'jest', component: JestIconComponent, allowAnimate: true },
  { name: 'linkedin', component: LinkedInIconComponent },
  { name: 'mobile-development', component: MobileDevelopmentIconComponent },
  { name: 'nest', component: NestIconComponent, allowAnimate: true },
  { name: 'node', component: NodeIconComponent, allowAnimate: true },
  { name: 'npm', component: NpmIconComponent, allowAnimate: true },
  { name: 'night', component: NightIconComponent },
  { name: 'phone', component: PhoneIconComponent },
  { name: 'postgresql', component: PostgresqlIconComponent, allowAnimate: true },
  { name: 'python', component: PythonIconComponent, allowAnimate: true },
  { name: 'react', component: ReactIconComponent, allowAnimate: true },
  { name: 'sass', component: SassIconComponent, allowAnimate: true },
  { name: 'send', component: SendIconComponent },
  { name: 'tailwindcss', component: TailwindcssIconComponent, allowAnimate: true },
  { name: 'typescript', component: TypescriptIconComponent, allowAnimate: true },
  { name: 'vite', component: ViteIconComponent, allowAnimate: true },
  { name: 'vue', component: VueIconComponent, allowAnimate: true },
  { name: 'web-development', component: WebDevelopmentIconComponent },
] as const;

export type IconName = (typeof ICON_OPTIONS)[number]['name'];

export interface IconAttributes {
  size?: string | number;
  color?: string;
  animateOnHover?: boolean;
}

export type IconInputs = IconAttributes & { name: IconName };

export interface IconComponentDefinition {
  size: InputSignal<string | number>;
  color: InputSignal<string>;
  animateOnHover?: InputSignal<boolean | undefined>;
}
