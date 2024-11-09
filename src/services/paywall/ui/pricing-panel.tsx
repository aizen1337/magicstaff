// 'use client'

// import { useState } from 'react'
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Switch } from "@/components/ui/switch"
// import { Button } from "@/components/ui/button"
// import { Check } from "lucide-react"

// // Configuration for feature prices

// const featureConfig = {
//   feature1: 5,
//   feature2: 3,
//   feature3: 2,
// }

// export default function PricingPanel() {
//   const [features, setFeatures] = useState({
//     feature1: false,
//     feature2: false,
//     feature3: false,
//   })

//   const basePrice = 10
//   const originalPrice = 19

//   const calculateTotal = () => {
//     return Object.entries(features).reduce((total, [feature, isEnabled]) => {
//       return isEnabled ? total + featureConfig[feature] : total
//     }, basePrice)
//   }

//   const handleFeatureToggle = (feature) => {
//     setFeatures(prev => ({ ...prev, [feature]: !prev[feature] }))
//   }

//   return (
//     <div className="flex flex-col md:flex-row gap-8 p-8 max-w-6xl mx-auto">
//       {/* Basic Plan Card */}
//       <Card className="flex-1 shadow-lg">
//         <CardHeader>
//           <CardTitle className="text-2xl font-bold">Basic Plan</CardTitle>
//           <CardDescription>Customizable features</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className="text-4xl font-bold mb-4">
//             ${calculateTotal()}
//             <span className="text-lg font-normal line-through ml-2 text-gray-500">${originalPrice}</span>
//           </div>
//           <div className="space-y-4">
//             {Object.entries(featureConfig).map(([feature, price]) => (
//               <div key={feature} className="flex items-center justify-between">
//                 <span>{feature.charAt(0).toUpperCase() + feature.slice(1)}</span>
//                 <div className="flex items-center gap-2">
//                   <span className="text-sm text-gray-500">+${price}</span>
//                   <Switch
//                     checked={features[feature]}
//                     onCheckedChange={() => handleFeatureToggle(feature)}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </CardContent>
//         <CardFooter>
//           <Button className="w-full bg-purple-900 hover:bg-purple-800">Choose Basic Plan</Button>
//         </CardFooter>
//       </Card>

//       {/* Premium Plan Card */}
//       <Card className="flex-1 shadow-lg border-purple-900">
//         <CardHeader>
//           <CardTitle className="text-2xl font-bold">Premium Plan</CardTitle>
//           <CardDescription>All features included</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className="text-4xl font-bold mb-4 text-purple-900">$199</div>
//           <div className="space-y-2">
//             {Object.keys(featureConfig).map((feature) => (
//               <div key={feature} className="flex items-center gap-2">
//                 <Check className="text-purple-900" />
//                 <span>{feature.charAt(0).toUpperCase() + feature.slice(1)}</span>
//               </div>
//             ))}
//             <div className="flex items-center gap-2">
//               <Check className="text-purple-900" />
//               <span>24/7 Support</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Check className="text-purple-900" />
//               <span>Advanced Analytics</span>
//             </div>
//           </div>
//         </CardContent>
//         <CardFooter>
//           <Button className="w-full bg-purple-900 hover:bg-purple-800">Choose Premium Plan</Button>
//         </CardFooter>
//       </Card>
//     </div>
//   )
// }