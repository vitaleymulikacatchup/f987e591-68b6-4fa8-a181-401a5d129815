"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import SimpleHero from '@/components/sections/layouts/hero/FrameHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import GradientFooter from '@/components/sections/layouts/footer/GradientFooter';

const theme: SiteTheme = {
  styleVariant: 'funAndTrendy',
  colorTemplate: 1,
  textAnimation: 'slide',
};

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logo-for-m-1759141336941-a1829fae.jpg"
          onLeftButtonClick={() => {}} // Placeholder
          leftButtonText=""
          onRightButtonClick={() => {}} // Placeholder
          buttonText="Buy MemePulse"
        />
      </div>

      <div id="hero" data-section="hero" style={{ background: 'bright gradient with neon accents' }}>
        <SimpleHero
          title="Welcome to MemePulse"
          description="Join the fun and vibrant world of memecoins!"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
          backgroundImage="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/draw-a-cartoon-desert-landscape-in-16-9--1759141333735-b501f606.jpg"
          backgroundImageAlt="Vibrant crypto visual"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          description="MemePulse is your gateway to the memecoin world. Playfully designed, we ensure transparent tokenomics and steps to buy."
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D variant="simple" />
      </div>

      <div id="tokenomics" data-section="tokenomics">
        <NumberGridTokenomics
          title="Tokenomics"
          description="Understanding our token distribution and defensive measures for our community."
          tokenData={[
            { value: "1 Trillion", description: "Total Supply" },
            { value: "$100 Million", description: "Locked Liquidity" },
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <GradientFooter
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logo-for-m-1759141336941-a1829fae.jpg"
          copyrightText="© 2023 MemePulse. All rights reserved."
          columns={[
            { title: "Community", items: [{ label: "Discord", onClick: () => {} }, { label: "Twitter", onClick: () => {} }] },
            { title: "Learn More", items: [{ label: "Tokenomics", onClick: () => {} }, { label: "Roadmap", onClick: () => {} }] },
            { title: "Products", items: [{ label: "FAQs", onClick: () => {} }, { label: "Contact", onClick: () => {} }] }
          ]}
          onPrivacyClick={() => {}} // Placeholder
        />
      </div>
    </SiteThemeProvider>
  );
}