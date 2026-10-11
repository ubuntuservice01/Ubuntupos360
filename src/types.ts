export type Sector = "farmacia" | "loja" | "comerciante" | "restaurante" | "bar" | "talho" | "padaria" | "grossista";
export type PayMethod = "dinheiro" | "mpesa" | "emola" | "cartao";
export type View = "dashboard" | "pos" | "products" | "sales" | "customers" | "companies" | "modules" | "settings";
export interface Product {
  id: string;
  tenantId: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  cost: number;
  stock: number;
  unit: "un" | "kg" | "g" | "l";
  minStock: number;
}
export interface Tenant {
  id: string;
  name: string;
  slug: string;
  sector: Sector;
  status: "active" | "trial" | "suspended";
  plan: string;
  modules: string[];
}
export interface Customer { id: string; tenantId: string; name: string; phone: string; balance: number; }
export interface SaleLine { productId: string; name: string; quantity: number; unit: string; unitPrice: number; subtotal: number; }
export interface Sale {
  id: string;
  tenantId: string;
  createdAt: string;
  lines: SaleLine[];
  total: number;
  method: PayMethod;
  customerId?: string;
}
export interface Database { tenants: Tenant[]; products: Product[]; customers: Customer[]; sales: Sale[]; }
export interface CartLine { productId: string; quantity: number; }