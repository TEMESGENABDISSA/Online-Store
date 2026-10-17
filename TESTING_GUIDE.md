# Testing Guide - Ethiopian Coffee Store

This guide will help you test every feature of the Ethiopian Coffee Store website.

## How to Access the Website

The production server is currently running at:
- **Local**: http://localhost:3000
- **Network**: http://192.168.56.1:3000

Open your browser and navigate to http://localhost:3000

---

## Complete Testing Checklist

### 1. Home Page (/)
**URL**: http://localhost:3000

**What to check:**
- [ ] Store name "Ethiopian Coffee Store" is visible
- [ ] Navigation bar appears with Home, Products, and Cart links
- [ ] Hero section with tagline "Premium Ethiopian coffee delivered to your door"
- [ ] "Browse All Products" button is visible and clickable
- [ ] Featured Products section shows 3 products
- [ ] Each product card shows: image, category, name, price
- [ ] Clicking a product card navigates to product detail page
- [ ] Clicking "Browse All Products" navigates to products page
- [ ] Navigation links work correctly

**Expected Result**: Clean landing page with navigation and featured products

---

### 2. Products Page (/products)
**URL**: http://localhost:3000/products

**What to check:**
- [ ] Page title "All Products" is visible
- [ ] Category filter dropdown is visible (options: All, Coffee Beans, Accessories)
- [ ] Sort by dropdown is visible (options: Name, Price Low to High, Price High to Low)
- [ ] All 10 products are displayed in a grid
- [ ] Each product card shows: image, category, name, price
- [ ] Clicking a product card navigates to product detail page
- [ ] **Test Category Filter**: Select "Coffee Beans" - should show only coffee products
- [ ] **Test Category Filter**: Select "Accessories" - should show only accessories
- [ ] **Test Category Filter**: Select "All" - should show all products again
- [ ] **Test Sort**: Select "Price (Low to High)" - products reorder by price
- [ ] **Test Sort**: Select "Price (High to Low)" - products reorder by price
- [ ] **Test Sort**: Select "Name (A-Z)" - products reorder alphabetically

**Expected Result**: All products displayed with working filters and sorting

---

### 3. Product Detail Page (/products/[id])
**URL**: Click any product from catalogue

**What to check:**
- [ ] Product image is displayed (large)
- [ ] Product category is visible
- [ ] Product name is visible (large heading)
- [ ] Product price is visible
- [ ] Product description is displayed
- [ ] "In Stock" or "Out of Stock" badge is visible
- [ ] "Add to Cart" button is visible
- [ ] "Back to Products" link works
- [ ] **Test Add to Cart**: Click "Add to Cart" button
- [ ] Cart count in navigation should increase by 1
- [ ] Button should give visual feedback

**Expected Result**: Complete product information with working add to cart

---

### 4. Shopping Cart (/cart)
**URL**: http://localhost:3000/cart

**What to check:**
- [ ] Page title "Shopping Cart" is visible
- [ ] **Test Empty Cart**: If cart is empty, show "Your Cart is Empty" message
- [ ] "Browse Products" link works from empty cart

**With items in cart:**
- [ ] Each cart item shows: product image, name, category, price, quantity
- [ ] Quantity controls (- and + buttons) work
- [ ] **Test Quantity Increase**: Click + button - quantity increases, line total updates
- [ ] **Test Quantity Decrease**: Click - button - quantity decreases, line total updates
- [ ] **Test Quantity to 0**: Decrease to 0 - item is removed from cart
- [ ] **Test Remove Button**: Click "Remove" - item is removed from cart
- [ ] Order Summary shows all items with quantities
- [ ] Subtotal is calculated correctly
- [ ] "Proceed to Checkout" button is visible
- [ ] "Continue Shopping" link works

**Expected Result**: Cart with full quantity management and correct calculations

---

### 5. Checkout Page (/checkout)
**URL**: http://localhost:3000/checkout

**What to check:**
- [ ] Page title "Checkout" is visible
- [ ] **Test Empty Cart**: If cart is empty, show error message and link to products
- [ ] Customer Information form is visible

**Form Fields:**
- [ ] Full Name field with label
- [ ] Email field with label
- [ ] Phone Number field with label
- [ ] Delivery Address textarea with label
- [ ] City field with label
- [ ] Postal Code field with label

**Form Validation:**
- [ ] **Test Empty Form**: Click "Place Order" with empty fields - show errors
- [ ] **Test Invalid Email**: Enter invalid email - show email error
- [ ] **Test Valid Form**: Fill all fields correctly - no errors
- [ ] Error messages are clear and helpful

**Order Summary:**
- [ ] Shows all items with quantities
- [ ] Total is calculated correctly
- [ ] "No payment required" message is visible

**Submit:**
- [ ] Click "Place Order" with valid form
- [ ] Button shows "Processing..." state
- [ ] Navigates to order success page
- [ ] Cart is cleared after successful order

**Expected Result**: Validated form with order summary and successful submission

---

### 6. Order Success Page (/order-success)
**URL**: http://localhost:3000/order-success (after checkout)

**What to check:**
- [ ] Green checkmark icon is visible
- [ ] "Order Confirmed!" message is visible
- [ ] Order ID is displayed
- [ ] Order date is displayed
- [ ] Customer information is shown (name, email, phone)
- [ ] Delivery address is shown
- [ ] Order items list is displayed with quantities and prices
- [ ] Total amount is displayed
- [ ] Confirmation message about email is shown
- [ ] "Continue Shopping" button works
- [ ] **Test No Order**: Access page without placing order - show "No Order Found"

**Expected Result**: Complete order confirmation with all details

---

### 7. Responsive Design Testing

**Desktop (1920x1080):**
- [ ] Navigation shows all links horizontally
- [ ] Product grid shows 3 columns
- [ ] Cart and checkout layouts use 2-column grid

**Tablet (768x1024):**
- [ ] Navigation shows all links horizontally
- [ ] Product grid shows 2 columns
- [ ] Cart and checkout layouts stack vertically

**Mobile (375x667):**
- [ ] Navigation shows hamburger menu
- [ ] Click hamburger - mobile menu opens
- [ ] Mobile menu shows all navigation links
- [ ] Product grid shows 1 column
- [ ] Cart and checkout layouts stack vertically
- [ ] All buttons are tappable (minimum 44px height)
- [ ] Text is readable without zooming

**How to test responsive design:**
1. Open browser DevTools (F12)
2. Click device toolbar icon (or Ctrl+Shift+M)
3. Select different device presets or custom sizes
4. Test at 375px (mobile), 768px (tablet), 1920px (desktop)

---

### 8. Accessibility Testing

**Keyboard Navigation:**
- [ ] Press Tab - focus moves to navigation
- [ ] Continue Tab - focus moves through all interactive elements
- [ ] Focus rings are visible on all elements
- [ ] Enter/Space activates buttons and links
- [ ] Escape closes mobile menu (if open)

**Screen Reader (optional):**
- [ ] All images have alt text
- [ ] Form fields have associated labels
- [ ] Error messages are announced
- [ ] Navigation has ARIA labels
- [ ] Cart count is announced to screen readers

**Color Contrast:**
- [ ] Text is readable against backgrounds
- [ ] Links are distinguishable from text
- [ ] Error messages are clearly visible

---

### 9. Performance Testing

**Production Build:**
- [ ] Run `npm run build` - should complete without errors
- [ ] Run `npm start` - server starts successfully
- [ ] Pages load quickly

**Image Optimization:**
- [ ] Images load progressively
- [ ] No layout shift when images load
- [ ] Images are in WebP format (check Network tab)

**Font Loading:**
- [ ] No flash of unstyled text
- [ ] Fonts load quickly

---

## Common Issues and Solutions

### Issue: Images not loading
**Solution**: Check that `next.config.ts` has Unsplash in remotePatterns

### Issue: Cart not persisting
**Solution**: Cart uses React Context - it resets on page refresh (this is expected for this project)

### Issue: Form validation not working
**Solution**: Ensure all fields are filled with valid data

### Issue: Mobile menu not opening
**Solution**: Check browser console for JavaScript errors

### Issue: Build fails
**Solution**: Run `npm install` to ensure all dependencies are installed

---

## Quick Test Script

Follow this sequence to test the complete user journey:

1. **Start**: Open http://localhost:3000
2. **Browse**: Click "Browse All Products"
3. **Filter**: Select "Coffee Beans" category
4. **Sort**: Sort by "Price (Low to High)"
5. **View**: Click first product
6. **Add**: Click "Add to Cart" (check cart count = 1)
7. **Add More**: Go back, add another product (cart count = 2)
8. **View Cart**: Click Cart in navigation
9. **Update**: Increase quantity of first item
10. **Remove**: Remove second item
11. **Checkout**: Click "Proceed to Checkout"
12. **Fill Form**: Enter valid customer information
13. **Submit**: Click "Place Order"
14. **Confirm**: Verify order success page
15. **Continue**: Click "Continue Shopping"
16. **Verify**: Cart should be empty

---

## Success Criteria

You have successfully tested everything if:
- ✅ All pages load without errors
- ✅ Navigation works between all pages
- ✅ Products can be browsed, filtered, and sorted
- ✅ Products can be added to cart
- ✅ Cart quantities can be updated
- ✅ Items can be removed from cart
- ✅ Subtotal is calculated correctly
- ✅ Checkout form validates correctly
- ✅ Orders can be submitted
- ✅ Order confirmation shows correct details
- ✅ Site works on mobile, tablet, and desktop
- ✅ Keyboard navigation works
- ✅ Production build succeeds

---

## Need Help?

If you encounter any issues:
1. Check the browser console for errors (F12 → Console)
2. Check the terminal for server errors
3. Verify all files are in place
4. Ensure the server is running (`npm start`)

Good luck with your presentation! 🚀
