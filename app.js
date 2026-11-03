// Vademécum Industria Farmacéutica Hahnemann - Array de Objetos Industrial
const productos = [
  {id:1, nombre:"Arnica Montana 30CH", precio:1250.00, lote:"Lote: 1000 frascos x 30ml", desc:"Antiinflamatorio. Registro AGEMED 2024-112. Producción GMP.", img:"https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400"},
  {id:2, nombre:"Nux Vomica 200CH", precio:1380.00, lote:"Lote: 1000 frascos x 30ml", desc:"Digestivo homeopático. Alta rotación farmacéutica.", img:"https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400"},
  {id:3, nombre:"Belladonna 30CH", precio:1220.00, lote:"Lote: 2000 frascos x 20ml", desc:"Fiebre y procesos inflamatorios. Planta SCZ.", img:"https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?w=400"},
  {id:4, nombre:"Paracetamol 500mg", precio:2450.00, lote:"Lote: 50,000 tabletas", desc:"Línea alopática. Fabricación bajo norma GMP.", img:"https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400"},
  {id:5, nombre:"Ibuprofeno 400mg", precio:2800.00, lote:"Lote: 50,000 tabletas", desc:"Maquila disponible para terceros. Blister.", img:"https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400"},
  {id:6, nombre:"Kit Homeopático 36 Remedios", precio:5600.00, lote:"Lote: 500 kits", desc:"Maletín farmacéutico completo Hahnemann - exportación.", img:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400"}
];

let carrito = [];
const grid = document.getElementById('grid-productos');

function renderizar(){
  grid.innerHTML="";
  productos.forEach(p=>{
    const article = document.createElement('article');
    article.className='card';
    article.innerHTML=`<img src="${p.img}" alt="${p.nombre}"><h3>${p.nombre}</h3><span class="lote">${p.lote}</span><p>${p.desc}</p><span class="precio">Bs ${p.precio.toFixed(2)} / lote</span><button onclick="agregar(${p.id})">Agregar a Pedido Industrial</button>`;
    grid.appendChild(article);
  });
}
function agregar(id){carrito.push(productos.find(p=>p.id===id));actualizar();document.getElementById('carrito-panel').classList.add('activo');}
function eliminar(i){carrito.splice(i,1);actualizar();}
function actualizar(){
  const cont=document.getElementById('items-carrito');cont.innerHTML="";let total=0;
  carrito.forEach((it,i)=>{total+=it.precio;const d=document.createElement('div');d.className='item';d.innerHTML=`<span>${it.nombre}<br><small>${it.lote}</small></span><button onclick="eliminar(${i})">X</button>`;cont.appendChild(d);});
  document.getElementById('total').textContent=total.toFixed(2);
  document.getElementById('contador').textContent=carrito.length;
}
document.getElementById('btn-carrito').onclick=()=>document.getElementById('carrito-panel').classList.add('activo');
document.getElementById('cerrar-carrito').onclick=()=>document.getElementById('carrito-panel').classList.remove('activo');
document.getElementById('vaciar').onclick=()=>{carrito=[];actualizar();};
document.getElementById('comprar').onclick=()=>{
  if(!carrito.length)return alert('Pedido vacío');
  alert('PEDIDO INDUSTRIAL ENVIADO A PLANTA HAHNEMANN!\nTotal Bs '+document.getElementById('total').textContent+'\nUn asesor GMP se contactará.');
  carrito=[];actualizar();document.getElementById('carrito-panel').classList.remove('activo');
};
document.getElementById('form-contacto').addEventListener('submit',e=>{
  e.preventDefault();
  const n=document.getElementById('nombre').value.trim(), em=document.getElementById('email').value.trim(), m=document.getElementById('mensaje').value.trim(), err=document.getElementById('error-form');
  if(n.length<3){err.textContent="Empresa / nombre mínimo 3 caracteres";return;}
  if(!em.includes('@')){err.textContent="Email corporativo inválido";return;}
  if(m.length<10){err.textContent="Detalle pedido mínimo 10 caracteres";return;}
  err.textContent="";
  alert('Cotización solicitada a Industria Farmacéutica Hahnemann! Gracias '+n);
  e.target.reset();
});
renderizar();actualizar();
