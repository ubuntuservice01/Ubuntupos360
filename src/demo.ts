import type { Database } from "./types";
export const initialData: Database = {
  tenants: [
    { id:"t1", name:"Talho Central", slug:"talhocentral", sector:"talho", status:"active", plan:"Profissional", modules:["pos","stock","talho","financeiro"] },
    { id:"t2", name:"Farmácia Vida", slug:"farmaciavida", sector:"farmacia", status:"trial", plan:"Farmácia", modules:["pos","stock","farmacia","financeiro"] },
    { id:"t3", name:"Restaurante Sabor", slug:"restaurantesabor", sector:"restaurante", status:"active", plan:"Restaurante", modules:["pos","stock","restaurante","financeiro"] }
  ],
  products: [
    { id:"p1",tenantId:"t1",name:"Carne bovina",sku:"TAL-001",category:"Carnes",price:480,cost:310,stock:65,unit:"kg",minStock:10 },
    { id:"p2",tenantId:"t1",name:"Costela bovina",sku:"TAL-002",category:"Carnes",price:390,cost:260,stock:22,unit:"kg",minStock:8 },
    { id:"p3",tenantId:"t1",name:"Frango inteiro",sku:"TAL-003",category:"Aves",price:320,cost:235,stock:14,unit:"un",minStock:5 },
    { id:"p4",tenantId:"t1",name:"Fígado bovino",sku:"TAL-004",category:"Miudezas",price:250,cost:170,stock:7,unit:"kg",minStock:10 },
    { id:"p5",tenantId:"t1",name:"Carne caprina",sku:"TAL-005",category:"Carnes",price:420,cost:290,stock:35,unit:"kg",minStock:8 },
    { id:"p6",tenantId:"t2",name:"Paracetamol 500 mg",sku:"FAR-001",category:"Medicamentos",price:35,cost:20,stock:120,unit:"un",minStock:25 },
    { id:"p7",tenantId:"t2",name:"Soro fisiológico",sku:"FAR-002",category:"Medicamentos",price:85,cost:51,stock:36,unit:"un",minStock:10 },
    { id:"p8",tenantId:"t3",name:"Frango grelhado",sku:"RES-001",category:"Refeições",price:450,cost:240,stock:25,unit:"un",minStock:5 },
    { id:"p9",tenantId:"t3",name:"Sumo natural",sku:"RES-002",category:"Bebidas",price:100,cost:50,stock:60,unit:"un",minStock:10 }
  ],
  customers: [
    {id:"c1",tenantId:"t1",name:"Maria José",phone:"84 000 0000",balance:0},
    {id:"c2",tenantId:"t1",name:"João Manuel",phone:"86 000 0000",balance:750}
  ],
  sales: []
};