
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { userProducts } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";

interface ProductsListProps {
  products?: typeof userProducts;
}

const ProductsList = ({ products = userProducts }: ProductsListProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Registered Products</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product Name</TableHead>
              <TableHead>Install Date</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Warranty</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{formatDate(new Date(product.installDate))}</TableCell>
                <TableCell>{product.location}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={
                    product.status === "active" 
                      ? "bg-green-100 text-green-800 hover:bg-green-200 hover:text-green-800" 
                      : "bg-amber-100 text-amber-800 hover:bg-amber-200 hover:text-amber-800"
                  }>
                    {product.status}
                  </Badge>
                </TableCell>
                <TableCell>{product.warranty}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ProductsList;
