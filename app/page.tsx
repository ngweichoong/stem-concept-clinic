"use client";

import {
  Atom,
  Calculator,
  Check,
  Clock3,
  FlaskConical,
  Globe2,
  GraduationCap,
  Languages,
  Mail,
  Sigma,
  Sparkles,
  Upload,
  X,
} from "lucide-react";
import type { FormEvent } from "react";
import { methodImage } from "./image-data";

const problems = [
  {
    number: "01",
    title: "只会背公式",
    description:
      "记得公式的形式，却不知道每个量代表什么，也不知道什么时候应该使用。",
  },
  {
    number: "02",
    title: "听得懂却不会做",
    description:
      "老师讲解时感觉明白，面对新的问题却不知道应该从哪里开始分析。",
  },
  {
    number: "03",
    title: "基础出现断层",
    description:
      "一个早期概念没有理解，导致后续知识相互牵连，学习越来越吃力。",
  },
  {
    number: "04",
    title: "不知道自己哪里不懂",
    description:
      "只知道问题不会处理，却无法指出真正缺失的是定义、逻辑还是数学基础。",
  },
];

const subjects = [
  {
    title: "数学",
    english: "MATHEMATICS",
    icon: Calculator,
    topics: ["代数与方程", "函数与图像", "几何与测量", "统计与概率"],
  },
  {
    title: "进阶数学",
    english: "ADVANCED MATHEMATICS",
    icon: Sigma,
    topics: ["微积分基础", "三角函数", "指数与对数", "向量与解析几何"],
  },
  {
    title: "物理",
    english: "PHYSICS",
    icon: Atom,
    topics: ["力与运动", "电学", "波与光", "能量与热学"],
  },
  {
    title: "化学",
    english: "CHEMISTRY",
    icon: FlaskConical,
    topics: ["原子与化学键", "摩尔概念", "酸碱与盐", "有机化学基础"],
  },
];

const suitableFor = [
  "知道自己卡在某一个概念，却无法独立解决",
  "上课能够跟上，但面对新问题不知道如何开始",
  "需要用中文重新理解抽象的数理概念",
  "不想重读整个章节，只想处理真正的问题",
  "愿意说明自己的思考过程并完成针对性练习",
];

const notSuitableFor = [
  "只想直接取得功课或考试答案",
  "要求代写作业、报告或考试",
  "完全不愿意练习或表达自己的理解",
  "希望一节课保证成绩立即大幅提升",
];

const asset = (path: string) =>\n  process.env.NODE_ENV === "production" ? `/stem-concept-clinic${path}` : path;\n\nconst inputStyle =
  "mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/10";

export default function Home() {
  function handleBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const country = String(form.get("country") || "");
    const timezone = String(form.get("timezone") || "");
    const subjectArea = String(form.get("subjectArea") || "");
    const level = String(form.get("level") || "");
    const concept = String(form.get("concept") || "");
    const preferredDate = String(form.get("preferredDate") || "");
    const preferredTime = String(form.get("preferredTime") || "");
    const notes = String(form.get("notes") || "");

    const uploadedFile = form.get("questionImage");
    const fileName =
      uploadedFile instanceof File && uploadedFile.name
        ? uploadedFile.name
        : "没有选择图片";

    const mailSubject = encodeURIComponent(
      `数理概念诊断预约｜${name}｜${subjectArea}`,
    );

    const mailBody = encodeURIComponent(
      [
        "您好，我想预约数理概念诊断。",
        "",
        `姓名：${name}`,
        `Email：${email}`,
        `国家／地区：${country}`,
        `时区：${timezone}`,
        `科目：${subjectArea}`,
        `学习程度：${level}`,
        `希望预约日期：${preferredDate}`,
        `希望预约时间：${preferredTime}`,
        "",
        "我卡住的概念：",
        concept,
        "",
        "补充说明：",
        notes || "无",
        "",
        `题目图片文件：${fileName}`,
        "注意：请在Email开启后，手动把题目图片附加到邮件中。",
      ].join("\n"),
    );

    window.location.href =
      `mailto:advasimo@icloud.com?subject=${mailSubject}&body=${mailBody}`;
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* HERO */}
      <section className="relative isolate min-h-screen overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(34,211,238,0.13),transparent_32%),radial-gradient(circle_at_20%_15%,rgba(59,130,246,0.08),transparent_28%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

        <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300 font-black text-slate-950">
              SC
            </span>

            <div>
              <p className="font-bold tracking-tight">
                STEM Concept Clinic
              </p>

              <p className="text-xs text-slate-400">
                数理概念诊所
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#problems" className="transition hover:text-white">
              学习问题
            </a>

            <a href="#method" className="transition hover:text-white">
              辅导方式
            </a>

            <a href="#subjects" className="transition hover:text-white">
              辅导科目
            </a>

            <a href="#pricing" className="transition hover:text-white">
              收费方式
            </a>
          </div>

          <a
            href="#booking"
            className="rounded-full border border-white/20 bg-white/[0.06] px-5 py-2.5 text-sm font-semibold backdrop-blur-md transition hover:border-cyan-300/50 hover:bg-cyan-300 hover:text-slate-950"
          >
            预约诊断
          </a>
        </nav>

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-104px)] max-w-7xl items-center gap-12 px-6 pb-20 pt-8 lg:grid-cols-[0.88fr_1.12fr] lg:px-10 lg:pt-0">
          <div className="py-10 lg:py-16">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/[0.08] px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-md">
              <Globe2 size={16} aria-hidden="true" />
              面向全球华人的线上数理概念诊断
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] sm:text-6xl lg:text-7xl">
              把抽象概念，
              <span className="mt-3 block text-cyan-300">
                变成真正看得懂的知识。
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              数学、物理与化学，不只是公式和符号。
              通过图像、关系、类比与实际情境，把复杂概念一步一步拆开，
              让你真正理解它为什么成立、什么时候使用。
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#booking"
                className="rounded-full bg-cyan-300 px-7 py-4 text-center font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:-translate-y-0.5 hover:bg-cyan-200"
              >
                告诉我你卡在哪里
              </a>

              <a
                href="#method"
                className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-center font-semibold transition hover:border-cyan-300/30 hover:bg-white/[0.08]"
              >
                看概念如何被拆开
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
              <span>数学</span>
              <span>进阶数学</span>
              <span>物理</span>
              <span>化学</span>
              <span>中文讲解</span>
              <span>全球线上</span>
            </div>
          </div>

          <div className="relative flex min-h-[430px] items-center justify-center lg:min-h-[620px]">
            <div className="absolute h-[72%] w-[72%] rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="absolute inset-x-8 bottom-12 h-24 rounded-full bg-blue-500/10 blur-3xl" />

            <img
              src={asset("/images/hero-final.webp")}
              alt="抽象的数学、物理与化学符号逐步转化为清晰的视觉概念"
              width={960}
              height={524}
              className="relative z-10 h-auto w-full max-w-[780px] rounded-[2rem] border border-white/10 shadow-2xl shadow-black/40"
            />
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 text-center text-xs text-slate-500 md:block">
          <span>从理解断点开始，而不是从整章重来</span>
          <div className="mx-auto mt-2 h-8 w-px bg-gradient-to-b from-cyan-300 to-transparent" />
        </div>
      </section>

      {/* PROBLEMS */}
      <section
        id="problems"
        className="relative overflow-hidden bg-slate-950 px-6 py-28 lg:px-10"
      >
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-cyan-400/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                你真正卡住的地方
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                不是做题不够多，
                <span className="mt-2 block text-slate-400">
                  而是前面的概念没有接上。
                </span>
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-slate-400 lg:justify-self-end">
              很多学生继续背公式、抄答案、重复刷题，
              却没有找出自己究竟在哪一个理解步骤断掉。
              时间花得越来越多，问题却一直留在那里。
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {problems.map((problem) => (
              <article
                key={problem.number}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/[0.06]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-lg font-bold text-cyan-300">
                  {problem.number}
                </div>

                <h3 className="mt-8 text-xl font-bold">
                  {problem.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {problem.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-14 flex flex-col justify-between gap-6 rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.06] p-7 sm:flex-row sm:items-center lg:p-9">
            <div>
              <p className="font-semibold text-cyan-300">
                概念诊断的第一步
              </p>

              <p className="mt-2 max-w-2xl text-slate-300">
                先找出理解断点，再决定应该讲什么，
                而不是把整章内容重新塞给你。
              </p>
            </div>

            <a
              href="#method"
              className="shrink-0 rounded-full bg-white px-6 py-3 text-center font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              看我们如何诊断
            </a>
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section
        id="method"
        className="relative overflow-hidden bg-slate-900 px-6 py-28 lg:px-10"
      >
        <div className="absolute left-0 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              辅导方式
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              不是直接给答案，
              <span className="block text-slate-400">
                而是一步一步修复理解。
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              先找出真正的知识断点，再重新建立概念、应用到代表性问题，
              最后确认学生能够独立理解与解决。
            </p>
          </div>

          <figure className="mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white p-2 shadow-2xl shadow-black/25 sm:p-3">
            <img
              src={methodImage}
              alt="Diagnose、Explain、Apply、Verify 四阶段概念学习流程"
              width={960}
              height={524}
              className="h-auto w-full rounded-[1.5rem]"
            />
          </figure>

          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-7 text-slate-500">
            通过 Diagnose → Explain → Apply → Verify 四个步骤，
            把抽象概念转化为真正能够独立使用的理解。
          </p>

          <div className="mt-16 grid gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                这和普通补习有什么不同？
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                普通补习跟着课程走，我们跟着你的理解断点走。
              </h3>

              <p className="mt-4 max-w-3xl leading-7 text-slate-400">
                你不需要为了一个概念重新报名长期课程。
                可以只带着一个具体问题前来，完成诊断和修复。
              </p>
            </div>

            <a
              href="#subjects"
              className="rounded-full bg-cyan-300 px-7 py-4 text-center font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              查看辅导范围
            </a>
          </div>
        </div>
      </section>

      {/* SUBJECTS */}
      <section
        id="subjects"
        className="relative overflow-hidden bg-slate-950 px-6 py-28 lg:px-10"
      >
        <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/3 rounded-full bg-cyan-400/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                辅导范围
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                专注数理概念，
                <span className="mt-2 block text-slate-400">
                  不受国家与考试体系限制。
                </span>
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-slate-400 lg:justify-self-end">
              无论你来自中国、台湾、马来西亚、美国或其他地区，
              只要需要使用中文理解数理概念，都可以预约线上辅导。
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {subjects.map((subject) => {
              const Icon = subject.icon;

              return (
                <article
                  key={subject.title}
                  className="group rounded-3xl border border-white/10 bg-slate-900/70 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-300 transition group-hover:bg-cyan-300 group-hover:text-slate-950">
                    <Icon size={30} strokeWidth={1.7} aria-hidden="true" />
                  </div>

                  <p className="mt-8 text-xs font-semibold tracking-[0.15em] text-cyan-300">
                    {subject.english}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">
                    {subject.title}
                  </h3>

                  <ul className="mt-6 space-y-3">
                    {subject.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-slate-400"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <div className="mt-20 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-cyan-300/25 bg-cyan-300/[0.06] p-8 lg:p-10">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950">
                  <GraduationCap size={28} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-cyan-300">
                    WHO THIS IS FOR
                  </p>

                  <h3 className="mt-1 text-2xl font-bold">
                    这种辅导适合谁？
                  </h3>
                </div>
              </div>

              <ul className="mt-8 space-y-5">
                {suitableFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 text-slate-300"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-300/15 text-cyan-300">
                      <Check size={15} strokeWidth={2.5} />
                    </span>

                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 lg:p-10">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-slate-400">
                  <Languages size={28} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-400">
                    SERVICE BOUNDARIES
                  </p>

                  <h3 className="mt-1 text-2xl font-bold">
                    这种辅导不适合谁？
                  </h3>
                </div>
              </div>

              <ul className="mt-8 space-y-5">
                {notSuitableFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 text-slate-400"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/5 text-slate-500">
                      <X size={15} strokeWidth={2.5} />
                    </span>

                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="font-semibold text-white">
                  讲解语言
                </p>

                <p className="mt-2 leading-7 text-slate-400">
                  主要使用中文讲解，并保留必要的英文数理术语。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="relative overflow-hidden bg-slate-900 px-6 py-28 lg:px-10"
      >
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/5 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              收费方式
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              先确认适不适合，
              <span className="block text-slate-400">
                再决定是否继续。
              </span>
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-slate-950/70 p-8 lg:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-slate-300">
                <Clock3 size={28} strokeWidth={1.8} />
              </div>

              <p className="mt-8 text-sm font-semibold text-slate-400">
                首次概念诊断
              </p>

              <div className="mt-4 flex items-end gap-3">
                <span className="text-5xl font-bold">免费</span>
                <span className="pb-1 text-slate-400">30分钟</span>
              </div>

              <p className="mt-6 leading-7 text-slate-400">
                每位新学生限一次。用于了解你的问题、
                判断概念断点，并确认双方是否适合继续。
              </p>
            </article>

            <article className="relative overflow-hidden rounded-3xl border border-cyan-300/35 bg-cyan-300/[0.08] p-8 lg:p-10">
              <div className="absolute right-0 top-0 rounded-bl-2xl bg-cyan-300 px-4 py-2 text-xs font-bold text-slate-950">
                创始试营运价
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950">
                <Sparkles size={28} strokeWidth={1.8} />
              </div>

              <p className="mt-8 text-sm font-semibold text-cyan-300">
                一对一线上辅导
              </p>

              <div className="mt-4 flex items-end gap-3">
                <span className="text-5xl font-bold">US$10</span>
                <span className="pb-1 text-slate-300">／60分钟</span>
              </div>

              <p className="mt-6 leading-7 text-slate-300">
                首20位付费学生适用。价格未来将根据服务经验、
                学生反馈和需求调整。
              </p>
            </article>
          </div>

          <div className="mt-10 text-center text-sm leading-7 text-slate-500">
            当前价格为试营运价格，不代表永久收费标准。
            付款方式将在确认预约后通过Email说明。
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section
        id="booking"
        className="relative overflow-hidden bg-slate-950 px-6 py-28 lg:px-10"
      >
        <div className="absolute right-0 top-20 h-96 w-96 translate-x-1/3 rounded-full bg-cyan-400/5 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              预约概念诊断
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              先告诉我，
              <span className="block text-slate-400">
                你究竟卡在哪里。
              </span>
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-400">
              提交后会开启你的默认Email应用，
              并自动整理预约资料。
              你确认内容后即可发送。
            </p>

            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                  <Mail size={24} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    预约资料发送至
                  </p>

                  <a
                    href="mailto:advasimo@icloud.com"
                    className="font-semibold text-white hover:text-cyan-300"
                  >
                    advasimo@icloud.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 p-6 text-sm leading-7 text-slate-500">
              网站不会收集电话号码。你提供的Email只用于回应此次预约，
              不会公开显示。
            </div>
          </div>

          <form
            onSubmit={handleBooking}
            className="rounded-3xl border border-white/10 bg-slate-900/70 p-7 shadow-2xl shadow-black/20 sm:p-9"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="text-sm font-medium text-slate-300">
                姓名
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="你的姓名"
                  className={inputStyle}
                />
              </label>

              <label className="text-sm font-medium text-slate-300">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  className={inputStyle}
                />
              </label>

              <label className="text-sm font-medium text-slate-300">
                国家／地区
                <input
                  type="text"
                  name="country"
                  required
                  placeholder="例如：台湾、美国、马来西亚"
                  className={inputStyle}
                />
              </label>

              <label className="text-sm font-medium text-slate-300">
                时区
                <input
                  type="text"
                  name="timezone"
                  required
                  placeholder="例如：UTC+8、UTC-5"
                  className={inputStyle}
                />
              </label>

              <label className="text-sm font-medium text-slate-300">
                科目
                <select
                  name="subjectArea"
                  required
                  defaultValue=""
                  className={inputStyle}
                >
                  <option value="" disabled>
                    选择科目
                  </option>
                  <option value="数学">数学</option>
                  <option value="进阶数学">进阶数学</option>
                  <option value="物理">物理</option>
                  <option value="化学">化学</option>
                  <option value="其他数理概念">其他数理概念</option>
                </select>
              </label>

              <label className="text-sm font-medium text-slate-300">
                学习程度
                <select
                  name="level"
                  required
                  defaultValue=""
                  className={inputStyle}
                >
                  <option value="" disabled>
                    选择目前程度
                  </option>
                  <option value="小学">小学</option>
                  <option value="初中">初中</option>
                  <option value="高中">高中</option>
                  <option value="大学基础">大学基础</option>
                  <option value="成人自学">成人自学</option>
                  <option value="其他">其他</option>
                </select>
              </label>

              <label className="text-sm font-medium text-slate-300">
                希望预约日期
                <input
                  type="date"
                  name="preferredDate"
                  required
                  className={inputStyle}
                />
              </label>

              <label className="text-sm font-medium text-slate-300">
                希望预约时间
                <input
                  type="time"
                  name="preferredTime"
                  required
                  className={inputStyle}
                />
              </label>
            </div>

            <label className="mt-6 block text-sm font-medium text-slate-300">
              你卡住的概念
              <textarea
                name="concept"
                required
                rows={5}
                placeholder="请说明你不理解什么、已经尝试过什么，以及你认为自己卡在哪里。"
                className={inputStyle}
              />
            </label>

            <label className="mt-6 block text-sm font-medium text-slate-300">
              题目图片
              <div className="mt-2 rounded-2xl border border-dashed border-white/15 bg-slate-950/50 p-5 transition hover:border-cyan-300/40">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-slate-400">
                    <Upload size={21} />
                  </div>

                  <div>
                    <p className="font-medium text-slate-300">
                      选择题目图片
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      选择后，请在Email开启时手动附加该图片
                    </p>
                  </div>
                </div>

                <input
                  type="file"
                  name="questionImage"
                  accept="image/png,image/jpeg,image/webp"
                  className="mt-4 block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-cyan-300 file:px-4 file:py-2 file:font-semibold file:text-slate-950"
                />
              </div>
            </label>

            <label className="mt-6 block text-sm font-medium text-slate-300">
              补充说明
              <textarea
                name="notes"
                rows={3}
                placeholder="例如：可使用的时间范围、希望使用的教材或其他说明。"
                className={inputStyle}
              />
            </label>

            <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-slate-500">
              <input
                type="checkbox"
                required
                className="mt-1 h-4 w-4 accent-cyan-300"
              />

              <span>
                我同意通过Email接收与此次概念诊断预约有关的回复。
              </span>
            </label>

            <button
              type="submit"
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-cyan-300 px-7 py-4 font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              <Mail size={20} />
              整理预约资料并开启Email
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-slate-600">
              此版本不会把资料储存在网站服务器。
              预约内容只会在你的Email应用中生成。
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-slate-950 px-6 py-10 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-white">
              STEM Concept Clinic
            </p>

            <p className="mt-1">
              面向全球华人的线上数理概念辅导
            </p>
          </div>

          <a
            href="mailto:advasimo@icloud.com"
            className="transition hover:text-cyan-300"
          >
            advasimo@icloud.com
          </a>
        </div>
      </footer>
    </main>
  );
}