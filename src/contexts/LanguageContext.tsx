import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'th';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.solutions': 'Solutions',
    'nav.technology': 'Technology',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Tech Leads People',
    'hero.subtitle': 'AI Recruitment Platform for Faster, Cheaper, Smarter Hiring',
    'hero.cta.contact': 'Contact Us',
    'hero.cta.explore': 'Explore Platform',
    
    // Pain Points
    'pain.title': 'Problems with Traditional Headhunters',
    'pain.expensive': 'Too Expensive',
    'pain.expensive.desc': 'Traditional fees range from 15-25% of annual salary',
    'pain.transparency': 'No Transparency',
    'pain.transparency.desc': 'Unclear processes and hidden costs',
    'pain.accuracy': 'Poor Accuracy',
    'pain.accuracy.desc': 'High mismatch rate between candidates and positions',
    'pain.slow': 'Slow Process',
    'pain.slow.desc': 'Takes weeks or months to complete hiring',
    'pain.followup': 'No Follow-up',
    'pain.followup.desc': 'Lack of post-placement support',
    'pain.industry': 'No Industry Understanding',
    'pain.industry.desc': 'Generic approach without sector expertise',
    'pain.pool': 'Limited Talent Pool',
    'pain.pool.desc': 'Restricted access to qualified candidates',
    
    // Solutions
    'solutions.title': 'Our Platform Solutions',
    'solutions.ai.title': 'AI Matching Engine',
    'solutions.ai.desc': 'Intelligent algorithm matches candidates with perfect-fit positions using advanced machine learning',
    'solutions.workflow.title': 'Recruitment Workflow Platform',
    'solutions.workflow.desc': 'Streamlined ATS system with real-time tracking and automated processes',
    'solutions.marketplace.title': 'Freelance Recruiter Marketplace',
    'solutions.marketplace.desc': 'Connect with verified recruiters who specialize in your industry',
    'solutions.dashboard.title': 'Customer Dashboard & Analytics',
    'solutions.dashboard.desc': 'Real-time insights and comprehensive reporting for data-driven decisions',
    
    // AI Technology
    'tech.title': 'AI-Powered Technology Stack',
    'tech.matching.title': 'AI Talent Matching',
    'tech.matching.desc': 'Deep learning algorithms analyze skills, experience, and cultural fit',
    'tech.ats.title': 'Real-time ATS',
    'tech.ats.desc': 'Modern applicant tracking with automation and collaboration tools',
    'tech.marketplace.title': 'Recruiter Marketplace',
    'tech.marketplace.desc': 'Network of specialized recruiters with performance tracking',
    'tech.screening.title': 'Auto-Screening & Smart Chatbot',
    'tech.screening.desc': 'AI-powered initial screening and candidate engagement',
    'tech.analytics.title': 'Talent Intelligence Analytics',
    'tech.analytics.desc': 'Predictive insights and market intelligence for strategic hiring',
    
    // Value Proposition
    'value.title': 'Core Value Proposition',
    'value.faster': '3-5x Faster',
    'value.faster.desc': 'Recruit at lightning speed',
    'value.cost': '40% Lower Cost',
    'value.cost.desc': 'Only 0.6x of annual salary',
    'value.accuracy': '50% Higher Accuracy',
    'value.accuracy.desc': 'Fewer hiring mismatches',
    'value.transparency': 'Full Transparency',
    'value.transparency.desc': 'Track every step in real-time',
    'value.scalable': 'Globally Scalable',
    'value.scalable.desc': 'Grow without limits',
    
    // System
    'system.title': 'System Architecture',
    'system.recruiter': 'PeopleX Recruiter App',
    'system.recruiter.desc': 'Mobile-first platform for recruiters',
    'system.client': 'PeopleX Client Dashboard',
    'system.client.desc': 'Comprehensive hiring management',
    'system.ai': 'PeopleX AI Match Core',
    'system.ai.desc': 'Intelligent matching engine',
    
    // Office
    'office.title': 'Visit Our Office',
    'office.address': 'PeopleX Innovation Co., Ltd.',
    'office.location': '1 Empire Tower, 47th Fl., Room 4703, Sathorn, Bangkok',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Ready to transform your recruitment process?',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.cta': 'Contact Us Now',
    
    // Footer
    'footer.tagline': 'Tech First, Talent Delivered.',
    'footer.rights': '© 2025 PeopleX Innovation Co., Ltd. All rights reserved.',
  },
  th: {
    // Navbar
    'nav.home': 'หน้าแรก',
    'nav.solutions': 'โซลูชัน',
    'nav.technology': 'เทคโนโลยี',
    'nav.contact': 'ติดต่อ',
    
    // Hero
    'hero.title': 'เทคนำคน',
    'hero.subtitle': 'แพลตฟอร์มสรรหาบุคคลด้วย AI ที่เร็ว ถูก และแม่นยำ',
    'hero.cta.contact': 'ติดต่อเรา',
    'hero.cta.explore': 'สำรวจแพลตฟอร์ม',
    
    // Pain Points
    'pain.title': 'ปัญหาของ Headhunter แบบเดิม',
    'pain.expensive': 'ค่าใช้จ่ายสูง',
    'pain.expensive.desc': 'ค่าธรรมเนียมแบบดั้งเดิม 15-25% ของเงินเดือนรายปี',
    'pain.transparency': 'ไม่โปร่งใส',
    'pain.transparency.desc': 'กระบวนการไม่ชัดเจนและมีค่าใช้จ่ายที่ซ่อนเร้น',
    'pain.accuracy': 'ความแม่นยำต่ำ',
    'pain.accuracy.desc': 'อัตราการจับคู่ที่ไม่ตรงระหว่างผู้สมัครและตำแหน่ง',
    'pain.slow': 'กระบวนการช้า',
    'pain.slow.desc': 'ใช้เวลาหลายสัปดาห์หรือหลายเดือนในการจ้างงาน',
    'pain.followup': 'ไม่มีการติดตามผล',
    'pain.followup.desc': 'ขาดการสนับสนุนหลังการจ้างงาน',
    'pain.industry': 'ไม่เข้าใจอุตสาหกรรม',
    'pain.industry.desc': 'วิธีการทั่วไปโดยไม่มีความเชี่ยวชาญในแต่ละภาคส่วน',
    'pain.pool': 'กลุ่มผู้สมัครจำกัด',
    'pain.pool.desc': 'การเข้าถึงผู้สมัครที่มีคุณสมบัติจำกัด',
    
    // Solutions
    'solutions.title': 'โซลูชันแพลตฟอร์มของเรา',
    'solutions.ai.title': 'เครื่องมือจับคู่ด้วย AI',
    'solutions.ai.desc': 'อัลกอริธึมอัจฉริยะจับคู่ผู้สมัครกับตำแหน่งที่เหมาะสมโดยใช้ Machine Learning ขั้นสูง',
    'solutions.workflow.title': 'แพลตฟอร์มการสรรหา',
    'solutions.workflow.desc': 'ระบบ ATS ที่เรียบง่ายพร้อมการติดตามแบบเรียลไทม์และกระบวนการอัตโนมัติ',
    'solutions.marketplace.title': 'ตลาด Recruiter อิสระ',
    'solutions.marketplace.desc': 'เชื่อมต่อกับนักสรรหาที่ได้รับการรับรองที่เชี่ยวชาญในอุตสาหกรรมของคุณ',
    'solutions.dashboard.title': 'แดชบอร์ดและการวิเคราะห์',
    'solutions.dashboard.desc': 'ข้อมูลเชิงลึกแบบเรียลไทม์และรายงานที่ครอบคลุมสำหรับการตัดสินใจตามข้อมูล',
    
    // AI Technology
    'tech.title': 'เทคโนโลยีที่ขับเคลื่อนด้วย AI',
    'tech.matching.title': 'การจับคู่ด้วย AI',
    'tech.matching.desc': 'อัลกอริธึม Deep Learning วิเคราะห์ทักษะ ประสบการณ์ และความเหมาะสมทางวัฒนธรรม',
    'tech.ats.title': 'ATS แบบเรียลไทม์',
    'tech.ats.desc': 'ระบบติดตามผู้สมัครสมัยใหม่พร้อมเครื่องมืออัตโนมัติและการทำงานร่วมกัน',
    'tech.marketplace.title': 'ตลาด Recruiter',
    'tech.marketplace.desc': 'เครือข่ายของนักสรรหาเฉพาะทางพร้อมการติดตามประสิทธิภาพ',
    'tech.screening.title': 'การคัดกรองอัตโนมัติและแชทบอทอัจฉริยะ',
    'tech.screening.desc': 'การคัดกรองเบื้องต้นและการมีส่วนร่วมของผู้สมัครด้วย AI',
    'tech.analytics.title': 'การวิเคราะห์ข้อมูล Talent',
    'tech.analytics.desc': 'ข้อมูลเชิงคาดการณ์และข่าวกรองตลาดสำหรับการจ้างงานเชิงกลยุทธ์',
    
    // Value Proposition
    'value.title': 'มูลค่าหลักที่นำเสนอ',
    'value.faster': 'เร็วกว่า 3-5 เท่า',
    'value.faster.desc': 'สรรหาด้วยความเร็วสูง',
    'value.cost': 'ต้นทุนต่ำกว่า 40%',
    'value.cost.desc': 'เพียง 0.6 เท่าของเงินเดือนรายปี',
    'value.accuracy': 'แม่นยำกว่า 50%',
    'value.accuracy.desc': 'การจ้างงานผิดพลาดน้อยลง',
    'value.transparency': 'โปร่งใสเต็มที่',
    'value.transparency.desc': 'ติดตามทุกขั้นตอนแบบเรียลไทม์',
    'value.scalable': 'ขยายได้ทั่วโลก',
    'value.scalable.desc': 'เติบโตได้ไร้ขีดจำกัด',
    
    // System
    'system.title': 'สถาปัตยกรรมระบบ',
    'system.recruiter': 'แอป PeopleX Recruiter',
    'system.recruiter.desc': 'แพลตฟอร์มมือถือสำหรับนักสรรหา',
    'system.client': 'แดชบอร์ด PeopleX Client',
    'system.client.desc': 'การจัดการการจ้างงานแบบครอบคลุม',
    'system.ai': 'PeopleX AI Match Core',
    'system.ai.desc': 'เครื่องมือจับคู่อัจฉริยะ',
    
    // Office
    'office.title': 'เยี่ยมชมสำนักงาน',
    'office.address': 'บริษัท PeopleX Innovation จำกัด',
    'office.location': 'อาคารเอ็มไพร์ ทาวเวอร์ ชั้น 47 ห้อง 4703 สาทร กรุงเทพฯ',
    
    // Contact
    'contact.title': 'ติดต่อเรา',
    'contact.subtitle': 'พร้อมที่จะเปลี่ยนกระบวนการสรรหาของคุณหรือไม่?',
    'contact.phone': 'โทรศัพท์',
    'contact.email': 'อีเมล',
    'contact.cta': 'ติดต่อเราตอนนี้',
    
    // Footer
    'footer.tagline': 'เทคโนโลยีนำ บุคลากรส่งมอบ',
    'footer.rights': '© 2025 บริษัท PeopleX Innovation จำกัด สงวนลิขสิทธิ์',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
