<script lang="ts">
  import { Github, Linkedin, Instagram, Mail } from "lucide-svelte";

  const socials = [
    { label: "GitHub", href: "https://github.com/zhuodannychen", icon: Github },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/zhuodannychen/", icon: Linkedin },
    { label: "Instagram", href: "https://www.instagram.com/dannychen8432/", icon: Instagram },
    { label: "Email", href: "mailto:zhuodannychen@gmail.com", icon: Mail },
  ];
</script>

<footer class="layout-lg mt-20">
  <div
    class="flex items-center justify-between border-t border-neutral-200 dark:border-neutral-800 pt-6 text-sm text-neutral-400 dark:text-neutral-500"
  >
    <span>© {new Date().getFullYear()} Danny Chen</span>
    <div class="flex items-center gap-5">
      {#each socials as s}
        <a
          href={s.href}
          aria-label={s.label}
          title={s.label}
          target={s.href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noreferrer"
          class="hover:text-black dark:hover:text-white transition-colors"
        >
          <svelte:component this={s.icon} size={18} />
        </a>
      {/each}
    </div>
  </div>
</footer>
