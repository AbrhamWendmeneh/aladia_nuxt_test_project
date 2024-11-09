<template>
  <!-- #2d2f31 -->
  <footer class="bg-[#1C1D1F] text-white m-0 p-0">
    <!-- Top companies section -->
    <div class="">
      <div class="px-15 flex justify-between items-center flex-wrap">
        <div class="max-w-2xl pl-0 pr-5 pt-5 pb-5 flex-1">
          <p class="text-lg font-semibold mb-4 px-12">
            Top companies choose Udemy Business to build in-demand career
            skills.
          </p>
        </div>

        <div class="flex space-x-4">
          <img src="/assets/images/nasdaq-dark.svg" alt="Nasdaq" class="h-8" />
          <img
            src="/assets/images/volkswagen-dark.svg"
            alt="Volkswagen"
            class="h-8"
          />
          <img src="/assets/images/eventbrite-dark.svg" alt="Box" class="h-8" />
          <img src="/assets/images/netapp-dark.svg" alt="NetApp" class="h-8" />
          <img
            src="/assets/images/eventbrite-dark.svg"
            alt="Eventbrite"
            class="h-8"
          />
        </div>
      </div>

      <hr class="border-gray-300 mb-8" />

      <!-- Explore top skills and certifications section -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pl-16">
        <FooterSection
          title="Certifications by Issuer"
          :items="[
            'Amazon Web Services (AWS) Certifications',
            'Six Sigma Certifications',
            'Microsoft Certifications',
            'Cisco Certifications',
            'Tableau Certifications',
            'See all Certifications',
          ]"
        />
        <FooterSection
          title="Web Development"
          :items="[
            'Web Development',
            'JavaScript',
            'React JS',
            'Angular',
            'Java',
          ]"
        />
        <FooterSection
          title="IT Certifications"
          :items="[
            'Amazon AWS',
            'AWS Certified Cloud Practitioner',
            'AZ-900: Microsoft Azure Fundamentals',
            'AWS Certified Solutions Architect - Associate',
            'Kubernetes',
          ]"
        />
        <FooterSection
          title="Leadership"
          :items="[
            'Leadership',
            'Management Skills',
            'Project Management',
            'Personal Productivity',
            'Emotional Intelligence',
          ]"
        />
        <FooterSection
          title="Certifications by Skill"
          :items="[
            'Cybersecurity Certification',
            'Project Management Certification',
            'Cloud Certification',
            'Data Analytics Certification',
            'HR Management Certification',
            'See all Certifications',
          ]"
        />
        <FooterSection
          title="Data Science"
          :items="[
            'Data Science',
            'Python',
            'Machine Learning',
            'ChatGPT',
            'Deep Learning',
          ]"
        />
        <FooterSection
          title="Communication"
          :items="[
            'Communication Skills',
            'Presentation Skills',
            'Public Speaking',
            'Writing',
            'PowerPoint',
          ]"
        />
        <FooterSection
          title="Business Analytics & Intelligence"
          :items="[
            'Microsoft Excel',
            'SQL',
            'Microsoft Power BI',
            'Data Analysis',
            'Business Analysis',
          ]"
        />
      </div>

      <!-- About section -->
      <div
        class="grid grid-cols-1 md:grid-cols-4 gap-8 bg-[#101112] pl-16 py-8"
      >
        <FooterSection
          title="About"
          :items="['About us', 'Careers', 'Contact us', 'Blog', 'Investors']"
        />
        <FooterSection
          title="Discovery Udemy"
          :items="[
            'Get the app',
            'Teach on Udemy',
            'Plans and Pricing',
            'Affiliate',
            'Help and Support',
          ]"
        />
        <FooterSection title="Udemy for Business" :items="['Udemy Business']" />
        <FooterSection
          title="Legal & Accessibility"
          :items="[
            'Accessibility statement',
            'Privacy policy',
            'Sitemap',
            'Terms',
          ]"
        />
      </div>
      <hr class="border-gray-300 w-full" />
      <!-- Udemy logo, license, cookies, and language section -->
      <div
        class="flex flex-col md:flex-row items-center justify-between text-white bg-[#101112] px-16 py-8"
      >
        <section class="flex align-baseline justify-center">
          <img
            src="/assets/images/logo-udemy-inverted.svg"
            alt="Udemy Logo"
            class="h-8 my-0 ml-0 mr-2 p-0"
          />
          <p class="text-sm pt-3">© 2024 Udemy, Inc.</p>
        </section>
        <div class="text-sm md:mb-0 mt-2">
          <p>Cookie settings</p>
        </div>

        <div class="text-sm text-gray-600 md:mb-0 mt-2 flex items-center">
          <button class="text-white hover:text-white">
            <GlobeAltIcon class="w-6 h-6" />
          </button>
          <p class="ml-2">English</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterSection from "./FooterSection.vue";
import { GlobeAltIcon } from "@heroicons/vue/24/outline";
export default {
  components: {
    FooterSection,
    GlobeAltIcon,
  },
};
</script>
