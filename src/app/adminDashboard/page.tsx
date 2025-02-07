import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, ShoppingCart, Users, CreditCard } from "lucide-react";
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function AdminDashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-100">
        {/* Total Sales */}
        <Card>
          <CardHeader>
            <CardTitle>Total Sales</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <span className="text-2xl font-bold">$12,340</span>
            <BarChart size={28} className="text-green-500" />
          </CardContent>
        </Card>

        {/* Total Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Total Orders</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <span className="text-2xl font-bold">235</span>
            <ShoppingCart size={28} className="text-blue-500" />
          </CardContent>
        </Card>

        {/* Total Users */}
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <span className="text-2xl font-bold">1,230</span>
            <Users size={28} className="text-purple-500" />
          </CardContent>
        </Card>

        {/* Pending Payments */}
        <Card>
          <CardHeader>
            <CardTitle>Pending Payments</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <span className="text-2xl font-bold">$3,500</span>
            <CreditCard size={28} className="text-red-500" />
          </CardContent>
        </Card>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
