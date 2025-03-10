import {
  GitHubLogoIcon,
  HeartFilledIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import Container from "../Container";

const Footer = () => {
  return (
    <div className="mt-auto">
      <div className="h-4" />
      <footer className="text-xs border-t border-accent ">
        <Container className="py-4 flex justify-between items-center gap-1">
          <div className="flex items-center gap-3">
            <p className="flex flex-row justify-center gap-1">
              <span>Made with</span>
              <span className="flex items-center">
                <HeartFilledIcon width={12} />
              </span>
              <span>by</span>
              <span className="font-bold">turbodisk</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="">
              <GitHubLogoIcon width={12} />
            </Link>
            <span>|</span>
            <Link href="">
              <LinkedInLogoIcon width={12} />
            </Link>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
