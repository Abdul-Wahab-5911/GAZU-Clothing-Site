import Department from '../Shop/Department'
import { womenProducts } from '../data/products'

function Women() {
  return (
    <Department
      products={womenProducts}
      filters={['ALL', 'DRESSES', 'TOPS', 'BOTTOMS', 'FOOTWEAR', 'ACCESSORIES']}
      departmentNumber="02"
      departmentName="WOMEN"
      title="MODERN STYLE, MADE YOURS"
      description="Considered silhouettes, refined essentials, and effortless layers made for every moment."
      heroImage="/images/1483985988355-763728e1935b.jpg"
      capsule="CAPSULE 2026"
      editorialTitle="THE EVERYDAY EDIT"
      editorialDescription="Versatile shapes and thoughtful details come together in a wardrobe designed to move with you."
      editorialImage="/images/1483985988355-763728e1935b.jpg"
    />
  )
}

export default Women
