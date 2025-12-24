import Link from "next/link"
import { Button } from "../ui/button"

const Logos = () => {
  return (
    <Button size ='sm' asChild>
        <Link href={'/'} className="text-xl">Logo</Link>
    </Button>
  )
}
export default Logos