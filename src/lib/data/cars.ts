export interface CarModel {
  slug: string;
  name: string;
  brand: 'hyundai' | 'kia';
  years: { from: number; to: number };
  engineTypes: string[];
  transmissionTypes: string[];
  description: string;
  metaTitle: string;
  metaDescription: string;
}

export const hyundaiModels: CarModel[] = [
  {
    slug: 'santa-fe',
    name: 'سانتافه',
    brand: 'hyundai',
    years: { from: 2007, to: 2026 },
    engineTypes: ['Theta II 2.4', 'Lambda 3.3 V6', 'Lambda 3.5 V6', 'Smartstream 2.5 T-GDI'],
    transmissionTypes: ['۶ سرعته اتوماتیک', '۸ سرعته اتوماتیک'],
    description: 'تعمیر تخصصی موتور و گیربکس اتوماتیک هیوندای سانتافه از نسل اول تا نسل چهارم. سرویس دوره‌ای، تعویض روغن گیربکس و فروش قطعات استوک تست‌شده.',
    metaTitle: 'تعمیر موتور و گیربکس هیوندای سانتافه | متخصص تعمیرات تخصصی',
    metaDescription: 'تعمیر تخصصی موتور و گیربکس اتوماتیک هیوندای سانتافه تمام نسل‌ها. فروش موتور و گیربکس استوک تست‌شده با گارانتی. تماس بگیرید.',
  },
  {
    slug: 'tucson',
    name: 'توسان',
    brand: 'hyundai',
    years: { from: 2007, to: 202
