// import { useState, useCallback } from 'react';




// const useFeatures = (initialFeatures, basePrice, featureConfig) => {
//   const [features, setFeatures] = useState(initialFeatures);

//   const calculateTotal = useCallback(() => {
//     return Object.entries(features).reduce((total, [feature, isEnabled]) => {
//       return isEnabled ? total + featureConfig[feature] : total;
//     }, basePrice);
//   }, [features, basePrice, featureConfig]);

//   const handleFeatureToggle = useCallback((feature) => {
//     setFeatures((prev) => ({ ...prev, [feature]: !prev[feature] }));
//   }, []);

//   return {
//     features,
//     setFeatures,
//     calculateTotal,
//     handleFeatureToggle,
//   };
// };

// export default useFeatures;
