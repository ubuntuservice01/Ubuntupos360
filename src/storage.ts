import type { Database } from "./types";
import { initialData } from "./demo";
const KEY = "ubuntu-pos-360-demo-v1";
const cloneSeed = (): Database => JSON.parse(JSON.stringify(initialData)) as Database;
export function loadData(): Database {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return cloneSeed();
    const value: unknown = JSON.parse(raw);
    if (!value || typeof value !== "object") return cloneSeed();
    const data = value as Database;
    if (!Array.isArray(data.tenants) || !Array.isArray(data.products) || !Array.isArray(data.sales) || !Array.isArray(data.customers)) return cloneSeed();
    return data;
  } catch { return cloneSeed(); }
}
export function saveData(data: Database): void {
  try { localStorage.setItem(KEY, JSON.stringify(data)); }
  catch { /* Espaço de armazenamento indisponível. A interface avisa que é apenas demonstração. */ }
}
export function resetData(): Database {
  try { localStorage.removeItem(KEY); } catch { /* noop */ }
  return cloneSeed();
}
export const uid = () => typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(36).slice(2);
export const money = (value: number) => new Intl.NumberFormat("pt-MZ", {style:"currency",currency:"MZN",minimumFractionDigits:2,maximumFractionDigits:2}).format(value);
export const number = (value: number) => new Intl.NumberFormat("pt-MZ", {maximumFractionDigits:2}).format(value);