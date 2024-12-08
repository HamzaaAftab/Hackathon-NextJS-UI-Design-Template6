'use client'

import * as React from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function CheckoutDescription() {
  return (
    <div className="container mx-auto px-4 py-5 sm:px-8 md:px-12 lg:px-16 mt-16 sm:mt-16 md:mt-20 lg:mt-32 ">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Billing Details Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Billing details</h2>
          <form className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name (Optional)</Label>
              <Input id="companyName" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="country">Country / Region</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sri Lanka" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sl">Sri Lanka</SelectItem>
                  <SelectItem value="in">India</SelectItem>
                  <SelectItem value="pk">Pakistan</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="street">Street address</Label>
              <Input id="street" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">Town / City</Label>
              <Input id="city" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="province">Province</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Western Province" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="western">Western Province</SelectItem>
                  <SelectItem value="central">Central Province</SelectItem>
                  <SelectItem value="southern">Southern Province</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="zip">ZIP code</Label>
              <Input id="zip" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input id="email" type="email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="additional">Additional Information</Label>
              <Textarea id="additional" className="min-h-[100px]" />
            </div>
          </form>
        </div>

        {/* Order Summary Section */}
        <div className="lg:pl-8">
          <div className="rounded-lg border p-6">
            <h2 className="text-xl font-medium mb-6">Product</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span className="text-[#FFA500]">Rs. 250,000.00</span>
              </div>

              <RadioGroup defaultValue="bank" className="mt-8 space-y-4">
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="bank" id="bank" className="mt-1" />
                  <div className="space-y-2">
                    <Label htmlFor="bank" className="font-medium">Direct Bank Transfer</Label>
                    <p className="text-sm text-muted-foreground">
                      Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="cash" id="cash" />
                  <Label htmlFor="cash" className="font-medium">Cash On Delivery</Label>
                </div>
              </RadioGroup>

              <div className="mt-6 text-sm text-muted-foreground">
                Your personal data will be used to support your experience throughout this website, to manage access to your account and for other purposes described in our{" "}
                <a href="#" className="underline">privacy policy</a>.
              </div>

              <Button className="w-full mt-6">
                Place order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

