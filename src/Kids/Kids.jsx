import Department from '../Shop/Department'
import { kidsProducts } from '../data/products'

function Kids() {
  return (
    <Department
      products={kidsProducts}
      filters={['ALL', 'TOPS', 'BOTTOMS', 'SETS', 'FOOTWEAR', 'ACCESSORIES']}
      departmentNumber="03"
      departmentName="KIDS"
      title="MADE FOR LITTLE ADVENTURES"
      description="Comfortable favorites, playful colors, and ready-for-anything styles for growing explorers."
      heroImage="https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=1600&q=80"
      capsule="THE PLAY EDIT"
      editorialTitle="READY, SET, GO"
      editorialDescription="Soft fabrics and easy-to-layer pieces keep little ones comfy from the playground to the weekend."
      editorialImage="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80"
    />
  )
}

export default Kids
