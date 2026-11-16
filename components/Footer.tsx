import { PROFILE } from "@/data/profile";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>
          © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js.
        </span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
