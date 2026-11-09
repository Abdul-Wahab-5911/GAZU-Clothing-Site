import Department from '../Shop/Department'
import { menProducts } from '../data/products'

function Men() {
  return (
    <Department
      products={menProducts}
      filters={['ALL', 'OUTERWEAR', 'TEES & HOODIES', 'PANTS', 'FOOTWEAR', 'ACCESSORIES']}
      departmentNumber="01"
      departmentName="MEN"
      title="ELEVATED EVERYDAY ESSENTIALS"
      description="Precision tailoring, heavyweight textiles, and relaxed monochrome silhouettes designed for effortless confidence."
      heroImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80"
      capsule="CAPSULE 2026"
      editorialTitle="THE MONOCHROME EDIT"
      editorialDescription="Every piece is crafted with dense 380 GSM loopback cotton, Japanese selvedge denim, and European tailoring techniques."
      editorialImage="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80"
    />
  )
}

export default Men
