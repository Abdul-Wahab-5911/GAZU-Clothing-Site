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
      heroImage="/images/1507679799987-c73779587ccf.jpg"
      capsule="CAPSULE 2026"
      editorialTitle="THE MONOCHROME EDIT"
      editorialDescription="Every piece is crafted with dense 380 GSM loopback cotton, Japanese selvedge denim, and European tailoring techniques."
      editorialImage="/images/1506794778202-cad84cf45f1d.jpg"
    />
  )
}

export default Men
