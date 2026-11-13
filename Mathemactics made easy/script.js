const curriculum = [
	{
		id: "jss1-number",
		level: "JSS1",
		title: "Number & Numeration",
		strand: "Number",
		lesson: ["Place value tells the value of a digit from its position.", "A number line orders numbers from least to greatest.", "Roman numerals use I, V, X, L, C, D and M."],
		questions: [
			["What is the value of 7 in 47,205?", "7,000", "The 7 is in the thousands place, so its value is 7 × 1,000 = 7,000."],
			["Write 30,000 + 5,000 + 60 + 2 as one number.", "35,062", "Add the place values: 30,000 + 5,000 + 60 + 2 = 35,062."],
			["Arrange 4,508, 4,580 and 4,085 in ascending order.", "4,085; 4,508; 4,580", "Compare digits from left to right. The hundreds digits order the numbers as 0, 5, 5; then compare tens in the last pair."],
			["Write 3,749 in words.", "Three thousand, seven hundred and forty-nine", "Group the digits into thousands and hundreds: 3 thousand, 7 hundred, 49."],
			["Write XLIV in Hindu-Arabic numerals.", "44", "XL means 50 − 10 = 40, and IV means 5 − 1 = 4. Together they make 44."],
			["What is the smallest 4-digit number that can be made from 0, 3, 6 and 8, using each once?", "3,068", "A 4-digit number cannot start with 0. Put the smallest non-zero digit first, then arrange the rest: 3,068."]
		]
	},
	{
		id: "jss1-sets",
		level: "JSS1",
		title: "Sets & Venn Diagrams",
		strand: "Number",
		lesson: ["A set is a well-defined collection of objects; its members are written inside braces.", "The union A ∪ B contains members in A or B or both; the intersection A ∩ B contains members in both.", "A Venn diagram uses overlapping circles to show relationships between sets."],
		questions: [
			["Write the set of even numbers less than 10 using roster notation.", "{2, 4, 6, 8}", "List the even positive numbers below 10 inside braces: {2, 4, 6, 8}."],
			["If A = {1, 2, 3} and B = {3, 4}, find A ∪ B.", "{1, 2, 3, 4}", "The union contains every member that is in A or B, listing 3 only once."],
			["If A = {a, b, c} and B = {b, c, d}, find A ∩ B.", "{b, c}", "The intersection contains only members common to both sets: b and c."],
			["If U = {1, 2, 3, 4, 5} and A = {2, 4}, find the complement of A in U.", "{1, 3, 5}", "The complement contains members of U that are not in A: {1, 3, 5}."],
			["In a class of 20, 12 like football, 9 like basketball and 5 like both. How many like at least one?", "16", "Use n(F ∪ B) = n(F) + n(B) − n(F ∩ B) = 12 + 9 − 5 = 16."],
			["If every member of set A is also in set B, what is the relationship between the sets?", "A is a subset of B", "When all members of A belong to B, A is a subset of B, written A ⊆ B."]
		]
	},
	{
		id: "jss1-operations",
		level: "JSS1",
		title: "Basic Operations & BODMAS",
		strand: "Number",
		lesson: ["Use BODMAS: Brackets, Orders, Division/Multiplication, Addition/Subtraction.", "Multiplication and division have equal priority; work left to right.", "Estimate first to check whether an answer is sensible."],
		questions: [
			["Calculate 348 + 576.", "924", "Add the columns: 8 + 6 = 14, carry 1; 4 + 7 + 1 = 12, carry 1; 3 + 5 + 1 = 9."],
			["Calculate 900 − 468.", "432", "Regroup by place value: 900 − 468 = 432."],
			["Work out 36 ÷ 4 × 3.", "27", "Division and multiplication go left to right: 36 ÷ 4 = 9, then 9 × 3 = 27."],
			["Evaluate 18 + 4 × 6.", "42", "Multiply first: 4 × 6 = 24. Then 18 + 24 = 42."],
			["Evaluate (18 + 4) × 6.", "132", "Brackets first: 18 + 4 = 22. Then 22 × 6 = 132."],
			["A school buys 24 boxes with 12 pencils in each. How many pencils are there?", "288 pencils", "Multiply the number of boxes by pencils per box: 24 × 12 = 288."]
		]
	},
	{
		id: "jss1-fractions",
		level: "JSS1",
		title: "Fractions",
		strand: "Number",
		lesson: ["Equivalent fractions have the same value; multiply or divide numerator and denominator by the same number.", "Find a common denominator before adding or subtracting unlike fractions.", "To divide by a fraction, multiply by its reciprocal."],
		questions: [
			["Simplify 18/24.", "3/4", "The highest common factor of 18 and 24 is 6. Divide both by 6: 18/24 = 3/4."],
			["Calculate 2/5 + 1/5.", "3/5", "The denominators are the same, so add the numerators: (2 + 1)/5 = 3/5."],
			["Calculate 1/2 + 1/3.", "5/6", "Use denominator 6: 1/2 = 3/6 and 1/3 = 2/6. Sum = 5/6."],
			["Calculate 3/4 − 1/8.", "5/8", "Convert 3/4 to 6/8. Then 6/8 − 1/8 = 5/8."],
			["Find 2/3 of 27.", "18", "Divide by the denominator, then multiply by the numerator: 27 ÷ 3 × 2 = 18."],
			["Calculate 2/5 ÷ 3/10.", "4/3 or 1⅓", "Multiply by the reciprocal: 2/5 × 10/3 = 20/15 = 4/3 = 1⅓."]
		]
	},
	{
		id: "jss1-decimals",
		level: "JSS1",
		title: "Decimals, Percentages & Ratio",
		strand: "Number",
		lesson: ["Line up decimal points when adding or subtracting decimals.", "Percent means out of 100; convert a percentage to a decimal by dividing by 100.", "A ratio compares quantities in the same units; simplify by dividing by a common factor."],
		questions: [
			["Calculate 4.75 + 2.8.", "7.55", "Write 2.8 as 2.80, then add: 4.75 + 2.80 = 7.55."],
			["Calculate 6.3 × 4.", "25.2", "Multiply 63 × 4 = 252, then place the decimal point one place: 25.2."],
			["Find 25% of 80.", "20", "25% = 1/4, and 1/4 of 80 is 20."],
			["Write 0.45 as a percentage.", "45%", "Multiply the decimal by 100: 0.45 × 100 = 45%."],
			["Simplify the ratio 18:24.", "3:4", "Divide both parts by their highest common factor, 6: 18:24 = 3:4."],
			["Share ₦360 in the ratio 2:4.", "₦120 and ₦240", "There are 6 parts. One part is ₦360 ÷ 6 = ₦60, so the shares are ₦120 and ₦240."]
		]
	},
	{
		id: "jss1-directed",
		level: "JSS1",
		title: "Directed Numbers & Approximation",
		strand: "Number",
		lesson: ["Positive numbers lie above zero; negative numbers lie below it.", "Subtracting a number is the same as adding its opposite.", "Round by checking the digit immediately to the right of the place value required."],
		questions: [
			["Calculate −3 + 8.", "5", "Start at −3 and move 8 places right on the number line: the result is 5."],
			["Calculate 4 − 9.", "−5", "Starting at 4 and moving 9 places left gives −5."],
			["Calculate (−6) × 3.", "−18", "A negative multiplied by a positive gives a negative: 6 × 3 = 18, so the answer is −18."],
			["Round 7,846 to the nearest hundred.", "7,800", "The tens digit is 4, which is less than 5, so keep the hundreds digit and change tens and units to zero."],
			["Round 3.768 to 2 decimal places.", "3.77", "The third decimal digit is 8, so round the hundredths digit up: 3.768 → 3.77."],
			["Estimate 49 × 21 by rounding each number to the nearest ten.", "1,000", "49 ≈ 50 and 21 ≈ 20. Then 50 × 20 = 1,000."]
		]
	},
	{
		id: "jss1-algebra",
		level: "JSS1",
		title: "Algebraic Expressions & Equations",
		strand: "Algebra",
		lesson: ["A letter stands for a number; a term is a number, a variable, or their product.", "Collect like terms by adding or subtracting their coefficients.", "Keep an equation balanced by doing the same operation to both sides."],
		questions: [
			["Simplify 4x + 3x.", "7x", "These are like terms. Add the coefficients: 4 + 3 = 7, so 4x + 3x = 7x."],
			["Simplify 5a + 2 − 3a + 4.", "2a + 6", "Collect like terms: 5a − 3a = 2a and 2 + 4 = 6."],
			["Find 3x + 2 when x = 5.", "17", "Substitute 5 for x: 3(5) + 2 = 15 + 2 = 17."],
			["Solve x + 7 = 15.", "x = 8", "Subtract 7 from both sides: x = 15 − 7 = 8."],
			["Solve 4y = 28.", "y = 7", "Divide both sides by 4: y = 28 ÷ 4 = 7."],
			["A number n is doubled and then 3 is added. Write an expression for the result.", "2n + 3", "Twice n is 2n; adding 3 gives 2n + 3."]
		]
	},
	{
		id: "jss1-geometry",
		level: "JSS1",
		title: "Geometry: Lines & Angles",
		strand: "Geometry",
		lesson: ["A right angle is 90°; a straight angle is 180°; a full turn is 360°.", "Angles on a straight line add to 180° and angles around a point add to 360°.", "Vertically opposite angles are equal."],
		questions: [
			["An angle is 37°. Find its complement.", "53°", "Complementary angles add to 90°: 90° − 37° = 53°."],
			["An angle is 124°. Find its supplement.", "56°", "Supplementary angles add to 180°: 180° − 124° = 56°."],
			["Two angles on a straight line are x° and 68°. Find x.", "112°", "Angles on a straight line total 180°: x = 180° − 68° = 112°."],
			["Three angles around a point are 90°, 145° and x°. Find x.", "125°", "Angles around a point total 360°: x = 360° − 90° − 145° = 125°."],
			["One of two vertically opposite angles is 73°. Find the other.", "73°", "Vertically opposite angles are equal, so the other angle is 73°."],
			["How many degrees are in a right angle?", "90°", "A right angle measures 90° by definition."]
		]
	},
	{
		id: "jss1-shapes",
		level: "JSS1",
		title: "Plane Shapes & Constructions",
		strand: "Geometry",
		lesson: ["A triangle has three sides; a quadrilateral has four sides.", "A regular polygon has equal sides and equal angles.", "Use a ruler, compass and protractor carefully; show construction arcs where needed."],
		questions: [
			["How many sides does a hexagon have?", "6", "The prefix hexa- means six, so a hexagon has 6 sides."],
			["What is the name of a triangle with all three sides equal?", "Equilateral triangle", "An equilateral triangle has three equal sides and three equal angles."],
			["How many lines of symmetry does a square have?", "4", "A square has two diagonal symmetry lines and two lines through the midpoints of opposite sides."],
			["What is the size of each angle in an equilateral triangle?", "60°", "The angles in a triangle total 180°. Each of three equal angles is 180° ÷ 3 = 60°."],
			["Which instrument is used to measure an angle?", "Protractor", "A protractor measures angles in degrees."],
			["How many diagonals can be drawn from one vertex of a pentagon?", "2", "From one vertex, do not connect to itself or its two neighbouring vertices. The remaining 5 − 3 = 2 vertices form diagonals."]
		]
	},
	{
		id: "jss1-mensuration",
		level: "JSS1",
		title: "Mensuration: Perimeter, Area & Volume",
		strand: "Measurement",
		lesson: ["Perimeter is the distance around a 2D shape; area measures the surface inside it.", "Rectangle area = length × width; triangle area = ½ × base × perpendicular height.", "Volume measures space occupied and is written in cubic units."],
		questions: [
			["Find the perimeter of a rectangle 8 cm long and 5 cm wide.", "26 cm", "Perimeter = 2(length + width) = 2(8 + 5) = 26 cm."],
			["Find the area of a rectangle 9 m by 4 m.", "36 m²", "Area = length × width = 9 × 4 = 36 m²."],
			["Find the area of a triangle with base 10 cm and height 6 cm.", "30 cm²", "Area = ½ × base × height = ½ × 10 × 6 = 30 cm²."],
			["A square has side 7 cm. Find its perimeter.", "28 cm", "Perimeter of a square = 4 × side = 4 × 7 = 28 cm."],
			["Find the volume of a cuboid 4 cm × 3 cm × 5 cm.", "60 cm³", "Volume = length × width × height = 4 × 3 × 5 = 60 cm³."],
			["Convert 2.5 m to centimetres.", "250 cm", "1 m = 100 cm, so 2.5 × 100 = 250 cm."]
		]
	},
	{
		id: "jss1-statistics",
		level: "JSS1",
		title: "Statistics & Data Presentation",
		strand: "Statistics",
		lesson: ["The mean is the total divided by the number of values.", "The median is the middle value after arranging data in order.", "The mode occurs most often; the range is the largest value minus the smallest."],
		questions: [
			["Find the mean of 4, 6, 8 and 10.", "7", "Mean = (4 + 6 + 8 + 10) ÷ 4 = 28 ÷ 4 = 7."],
			["Find the median of 3, 9, 5, 1 and 7.", "5", "Order the values: 1, 3, 5, 7, 9. The middle value is 5."],
			["Find the mode of 2, 4, 4, 5, 7.", "4", "The value 4 appears twice; every other value appears once, so the mode is 4."],
			["Find the range of 12, 4, 9 and 15.", "11", "Range = largest − smallest = 15 − 4 = 11."],
			["A pictogram key says 1 symbol = 5 books. How many books do 4 symbols represent?", "20 books", "Multiply the number of symbols by the key value: 4 × 5 = 20 books."],
			["The scores are 2, 4 and 6. Find their mean.", "4", "Mean = (2 + 4 + 6) ÷ 3 = 12 ÷ 3 = 4."]
		]
	},
	{
		id: "jss2-number-bases",
		level: "JSS2",
		title: "Number Bases, Factors & Multiples",
		strand: "Number",
		lesson: ["In base 10, place values are powers of 10; in base 2 they are powers of 2.", "A factor divides a number exactly; a multiple is found by multiplying by whole numbers.", "HCF is the greatest common factor; LCM is the smallest common multiple."],
		questions: [
			["Write 1011₂ in base ten.", "11", "1011₂ = 1×8 + 0×4 + 1×2 + 1×1 = 11."],
			["Write 13 in base two.", "1101₂", "13 = 8 + 4 + 1, so the binary place values 8, 4, 2, 1 give 1101₂."],
			["Find the HCF of 18 and 30.", "6", "Factors common to both include 1, 2, 3 and 6. The highest is 6."],
			["Find the LCM of 4 and 6.", "12", "Multiples of 4: 4, 8, 12. Multiples of 6: 6, 12. The least common multiple is 12."],
			["Is 37 a prime number?", "Yes", "37 has no divisor among the primes 2, 3 or 5 (and √37 is less than 7), so its only factors are 1 and 37."],
			["Write 20 as a product of prime factors.", "2² × 5", "20 = 2 × 10 = 2 × 2 × 5 = 2² × 5."]
		]
	},
	{
		id: "jss2-ratio-rate",
		level: "JSS2",
		title: "Fractions, Ratio, Rate & Proportion",
		strand: "Number",
		lesson: ["To divide a quantity in a ratio, add the ratio parts, then find the value of one part.", "A rate compares quantities with different units, such as kilometres per hour.", "In direct proportion, multiplying one quantity by a factor multiplies the other by the same factor."],
		questions: [
			["Share ₦840 in the ratio 3:4.", "₦360 and ₦480", "There are 7 parts. One part = ₦840 ÷ 7 = ₦120. The shares are 3×120 and 4×120."],
			["A car travels 150 km in 3 hours. Find its average speed.", "50 km/h", "Speed = distance ÷ time = 150 ÷ 3 = 50 km/h."],
			["If 5 exercise books cost ₦1,250, how much do 8 cost at the same rate?", "₦2,000", "One book costs ₦1,250 ÷ 5 = ₦250. Eight cost 8 × ₦250 = ₦2,000."],
			["Simplify 2/3 : 4/5.", "5:6", "Multiply both parts by 15 to clear denominators: 10:12, then simplify to 5:6."],
			["A map scale is 1 cm to 5 km. What real distance does 7 cm represent?", "35 km", "Multiply map distance by the scale: 7 × 5 = 35 km."],
			["If y is directly proportional to x and y = 12 when x = 3, find y when x = 5.", "20", "The constant is 12 ÷ 3 = 4, so y = 4x. When x = 5, y = 20."]
		]
	},
	{
		id: "jss2-percentages",
		level: "JSS2",
		title: "Percentages, Profit, Loss & Interest",
		strand: "Number",
		lesson: ["Percentage change = change ÷ original amount × 100%.", "Profit = selling price − cost price; loss = cost price − selling price.", "Simple interest = principal × rate × time ÷ 100."],
		questions: [
			["A bag costs ₦4,000 and is sold for ₦4,600. Find the profit.", "₦600", "Profit = selling price − cost price = ₦4,600 − ₦4,000 = ₦600."],
			["An item bought for ₦5,000 is sold for ₦4,250. Find the loss percentage.", "15%", "Loss = ₦750. Loss percentage = 750 ÷ 5,000 × 100% = 15%."],
			["A shirt marked ₦8,000 has a 10% discount. Find the sale price.", "₦7,200", "Discount = 10% of ₦8,000 = ₦800. Sale price = ₦8,000 − ₦800 = ₦7,200."],
			["Find the simple interest on ₦20,000 at 5% per year for 2 years.", "₦2,000", "Interest = 20,000 × 5 × 2 ÷ 100 = ₦2,000."],
			["A population of 200 increases by 15%. What is the new population?", "230", "Increase = 15% of 200 = 30. New population = 200 + 30 = 230."],
			["Express 36 as a percentage of 120.", "30%", "36 ÷ 120 × 100% = 30%. "]
		]
	},
	{
		id: "jss2-indices",
		level: "JSS2",
		title: "Indices, Standard Form & Approximation",
		strand: "Number",
		lesson: ["When multiplying powers with the same base, add the indices: aᵐ × aⁿ = aᵐ⁺ⁿ.", "Standard form is a × 10ⁿ where 1 ≤ a < 10.", "Significant figures start at the first non-zero digit."],
		questions: [
			["Evaluate 2³ × 2².", "32", "Add indices with the same base: 2³ × 2² = 2⁵ = 32."],
			["Evaluate 5⁰.", "1", "Any non-zero number raised to the power zero equals 1."],
			["Write 48,000 in standard form.", "4.8 × 10⁴", "Move the decimal point 4 places left to get 4.8, so multiply by 10⁴."],
			["Write 0.0062 in standard form.", "6.2 × 10⁻³", "Move the decimal point 3 places right to get 6.2, so the power is −3."],
			["Round 0.04786 to 2 significant figures.", "0.048", "The first two significant digits are 4 and 7. The next digit is 8, so 7 rounds up to 8."],
			["Evaluate 10³ ÷ 10¹.", "100", "Subtract indices when dividing powers with the same base: 10³ ÷ 10¹ = 10² = 100."]
		]
	},
	{
		id: "jss2-algebra",
		level: "JSS2",
		title: "Algebraic Expressions & Formulae",
		strand: "Algebra",
		lesson: ["Expand brackets by multiplying every term inside by the term outside.", "Factorising reverses expansion by taking out a common factor.", "Substitute known values into a formula, keeping brackets clear."],
		questions: [
			["Expand 3(x + 4).", "3x + 12", "Multiply 3 by each term: 3×x + 3×4 = 3x + 12."],
			["Expand 2(3a − 5).", "6a − 10", "Multiply through: 2×3a − 2×5 = 6a − 10."],
			["Factorise 6x + 12.", "6(x + 2)", "The common factor is 6. Divide each term by 6: 6x + 12 = 6(x + 2)."],
			["Simplify 3a + 2b − a + 5b.", "2a + 7b", "Collect like terms: 3a − a = 2a and 2b + 5b = 7b."],
			["If P = 2(l + w), find P when l = 8 cm and w = 3 cm.", "22 cm", "Substitute: P = 2(8 + 3) = 2 × 11 = 22 cm."],
			["Simplify 4x × 3y.", "12xy", "Multiply the number coefficients, 4 × 3 = 12, then write the variables: 12xy."]
		]
	},
	{
		id: "jss2-equations",
		level: "JSS2",
		title: "Equations, Inequalities & Sequences",
		strand: "Algebra",
		lesson: ["Solve equations by isolating the unknown while keeping both sides balanced.", "An inequality uses <, >, ≤ or ≥ to compare values.", "An arithmetic sequence changes by the same common difference each time."],
		questions: [
			["Solve 3x + 5 = 20.", "x = 5", "Subtract 5: 3x = 15. Divide by 3: x = 5."],
			["Solve 2(y − 3) = 10.", "y = 8", "Divide by 2: y − 3 = 5. Add 3: y = 8."],
			["Solve x + 4 < 11 for x.", "x < 7", "Subtract 4 from both sides: x < 11 − 4, so x < 7."],
			["Find the next two terms: 5, 9, 13, 17, …", "21, 25", "The common difference is +4. Add 4 twice: 21, then 25."],
			["Find the 10th term of 2, 5, 8, 11, …", "29", "The first term is 2 and the common difference is 3. Term 10 = 2 + 9×3 = 29."],
			["Solve 5x = 2x + 12.", "x = 4", "Subtract 2x: 3x = 12. Divide by 3: x = 4."]
		]
	},
	{
		id: "jss2-graphs",
		level: "JSS2",
		title: "Coordinates, Tables & Graphs",
		strand: "Algebra",
		lesson: ["An ordered pair (x, y) locates a point: move along x first, then y.", "A coordinate grid has a horizontal x-axis and a vertical y-axis meeting at the origin (0, 0).", "A table of values helps plot a relation; label axes and choose an even scale."],
		questions: [
			["What are the coordinates of the origin?", "(0, 0)", "The x-axis and y-axis meet at the origin, where both coordinates are zero."],
			["In which quadrant is the point (3, 2)?", "First quadrant", "Both coordinates are positive, so the point lies in the first quadrant."],
			["For y = 2x + 1, find y when x = 3.", "7", "Substitute x = 3: y = 2(3) + 1 = 7."],
			["Complete the ordered pair for y = x + 2 when x = 4.", "(4, 6)", "Substitute x = 4 to get y = 6, so the ordered pair is (4, 6)."],
			["A point is 5 units right and 2 units down from the origin. Write its coordinates.", "(5, −2)", "Right gives a positive x-coordinate of 5; down gives a negative y-coordinate of −2."],
			["For the relation y = 3x, what is y when x = 0?", "0", "Substitute x = 0: y = 3 × 0 = 0. The graph passes through the origin."]
		]
	},
	{
		id: "jss2-geometry",
		level: "JSS2",
		title: "Angles, Polygons & Bearings",
		strand: "Geometry",
		lesson: ["Angles in a triangle total 180°; angles in a quadrilateral total 360°.", "The sum of interior angles of an n-sided polygon is (n − 2) × 180°.", "Bearings are measured clockwise from north and written with three digits."],
		questions: [
			["Find the third angle in a triangle with angles 48° and 67°.", "65°", "Triangle angles total 180°: 180° − 48° − 67° = 65°."],
			["Find the sum of the interior angles of a pentagon.", "540°", "Use (n − 2) × 180°: (5 − 2) × 180° = 540°."],
			["Find each interior angle of a regular hexagon.", "120°", "Sum = (6 − 2) × 180° = 720°. Divide by 6: each angle is 120°."],
			["A quadrilateral has angles 90°, 85°, 110° and x°. Find x.", "75°", "Quadrilateral angles total 360°: x = 360° − 90° − 85° − 110° = 75°."],
			["Write the bearing for due east.", "090°", "Bearings start at north and turn clockwise. Due east is a quarter-turn: 090°."],
			["Two parallel lines are crossed by a transversal. If one corresponding angle is 72°, find the other corresponding angle.", "72°", "Corresponding angles between parallel lines are equal, so the other angle is 72°."]
		]
	},
	{
		id: "jss2-construction",
		level: "JSS2",
		title: "Construction, Congruence & Locus",
		strand: "Geometry",
		lesson: ["Construct accurate angles and triangles using a ruler, compass and protractor.", "Congruent shapes have the same shape and size.", "A locus is the path of points satisfying a stated condition."],
		questions: [
			["What is the locus of points 4 cm from a fixed point?", "A circle of radius 4 cm", "Every point 4 cm from the fixed point lies on a circle centred at that point with radius 4 cm."],
			["What is the locus of points equidistant from two fixed points A and B?", "The perpendicular bisector of AB", "Points equally distant from A and B lie on the perpendicular bisector of the segment AB."],
			["Two triangles have all three corresponding sides equal. What can you conclude?", "They are congruent", "Three pairs of equal corresponding sides satisfy the SSS congruence condition."],
			["Which tool is used to draw a circle of a specified radius?", "Compass", "Set the compass opening to the required radius and keep its point fixed at the centre."],
			["What is the locus of points 3 cm from a straight line?", "Two parallel lines, each 3 cm from the line", "On either side of the given line, points at a fixed perpendicular distance form a parallel line."],
			["Which condition guarantees congruence when two sides and their included angle match?", "SAS", "Side-Angle-Side (SAS) is a triangle congruence condition."]
		]
	},
	{
		id: "jss2-mensuration",
		level: "JSS2",
		title: "Mensuration: Circles, Area & Volume",
		strand: "Measurement",
		lesson: ["Circle circumference C = 2πr = πd; area A = πr².", "Prism volume = cross-sectional area × length; cuboid volume = l × w × h.", "Convert all measurements to compatible units before using a formula."],
		questions: [
			["Find the circumference of a circle with diameter 14 cm. Use π = 22/7.", "44 cm", "C = πd = 22/7 × 14 = 44 cm."],
			["Find the area of a circle with radius 7 cm. Use π = 22/7.", "154 cm²", "A = πr² = 22/7 × 7² = 22 × 7 = 154 cm²."],
			["Find the volume of a cylinder with radius 3 cm and height 5 cm. Give the answer in terms of π.", "45π cm³", "V = πr²h = π × 3² × 5 = 45π cm³."],
			["A triangle has base 12 cm and perpendicular height 9 cm. Find its area.", "54 cm²", "Area = ½ × base × height = ½ × 12 × 9 = 54 cm²."],
			["A cuboid measures 8 cm by 5 cm by 3 cm. Find its volume.", "120 cm³", "Volume = length × width × height = 8 × 5 × 3 = 120 cm³."],
			["Convert 3.2 litres to millilitres.", "3,200 mL", "1 litre = 1,000 mL, so 3.2 × 1,000 = 3,200 mL."]
		]
	},
	{
		id: "jss2-statistics",
		level: "JSS2",
		title: "Statistics & Probability",
		strand: "Statistics",
		lesson: ["A frequency table records how many times each value occurs.", "Probability = number of favourable outcomes ÷ total equally likely outcomes.", "Probability ranges from 0 (impossible) to 1 (certain)."],
		questions: [
			["A fair coin is tossed once. What is the probability of getting heads?", "1/2", "There is 1 favourable outcome (heads) out of 2 equally likely outcomes: 1/2."],
			["A fair six-sided die is rolled. Find the probability of rolling a 5.", "1/6", "One face shows 5 out of 6 equally likely faces, so the probability is 1/6."],
			["A bag has 3 red and 5 blue counters. Find the probability of picking a red counter.", "3/8", "There are 3 favourable counters out of 3 + 5 = 8 total counters."],
			["Find the mean of 3, 5, 5, 7 and 10.", "6", "Total = 30. Divide by 5 values: mean = 30 ÷ 5 = 6."],
			["The frequencies are: score 1 occurs 2 times, score 2 occurs 3 times, score 3 occurs 1 time. How many scores were recorded?", "6", "Add the frequencies: 2 + 3 + 1 = 6 scores."],
			["A bag contains only green counters. What is the probability of picking a green counter?", "1", "Every possible counter is green, so the event is certain and has probability 1."]
		]
	}
];

const view = document.querySelector("#app-view");
const breadcrumb = document.querySelector("#breadcrumb");
const progressKey = "maths-made-easy-progress-v1";
const savedProgress = readProgress();
let currentView = "home";
let selectedLevel = "All";
let searchTerm = "";
let selectedTopicId = null;
let questionIndex = 0;
let revealed = false;
let feedback = "";

function readProgress() {
	try {
		return JSON.parse(localStorage.getItem(progressKey)) || { completed: [], attempts: 0 };
	} catch {
		return { completed: [], attempts: 0 };
	}
}

function saveProgress() {
	localStorage.setItem(progressKey, JSON.stringify(savedProgress));
}

function escapeHtml(value) {
	return String(value).replace(/[&<>"']/g, (character) => ({
		"&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;"
	})[character]);
}

function setBreadcrumb(label) {
	breadcrumb.innerHTML = `<span>LEARNING SPACE</span><span class="breadcrumb-dot">/</span><strong>${escapeHtml(label)}</strong>`;
	document.querySelectorAll(".nav-link").forEach((button) => {
		button.classList.toggle("is-active", button.dataset.view === (currentView === "topic" ? "curriculum" : currentView));
	});
}

function levelTopics(level) {
	return curriculum.filter((topic) => level === "All" || topic.level === level);
}

function topicById(id) {
	return curriculum.find((topic) => topic.id === id);
}

function topicIsComplete(topic) {
	return topic.questions.every((_, index) => savedProgress.completed.includes(`${topic.id}:${index}`));
}

function renderHome() {
	currentView = "home";
	selectedTopicId = null;
	setBreadcrumb("Overview");
	const totalQuestions = curriculum.reduce((sum, topic) => sum + topic.questions.length, 0);
	const completedCount = savedProgress.completed.length;
	const percent = Math.round(completedCount / totalQuestions * 100);
	const jss1 = curriculum.filter((topic) => topic.level === "JSS1");
	const jss2 = curriculum.filter((topic) => topic.level === "JSS2");
	const lastTopic = curriculum.find((topic) => savedProgress.completed.some((entry) => entry.startsWith(`${topic.id}:`)));

	view.innerHTML = `
		<div class="welcome-row">
			<div class="welcome-copy">
				<p class="eyebrow">A clearer way to learn</p>
				<h1>Maths makes sense.<br><em>Let's prove it.</em></h1>
				<p>Build your confidence one idea at a time. Choose your class, explore a topic, then practise with worked answers.</p>
			</div>
			<div class="progress-panel" aria-label="${completedCount} of ${totalQuestions} questions completed">
				<div class="progress-top"><span>YOUR LEARNING</span><span>${percent}%</span></div>
				<span class="progress-number">${completedCount}<small style="font: 14px var(--sans); color: #d8ebdc"> / ${totalQuestions}</small></span>
				<span class="progress-caption">questions completed</span>
				<div class="progress-track"><div class="progress-fill" style="width: ${percent}%"></div></div>
			</div>
		</div>

		<div class="section-heading">
			<div><h2>Choose your class</h2><p>Every class has a complete set of topics to explore.</p></div>
			<button class="text-button" data-action="open-curriculum" type="button">Browse all topics →</button>
		</div>
		<div class="grade-grid">
			<button class="grade-card" data-action="level" data-level="JSS1" type="button">
				<span class="grade-top"><span class="grade-pill">JUNIOR SECONDARY</span><span class="grade-arrow">↗</span></span>
				<h3>JSS1</h3><p>Build strong foundations in number, algebra, geometry and data.</p>
				<span class="grade-meta"><span><strong>${jss1.length}</strong> topics</span><span><strong>${jss1.reduce((n, topic) => n + topic.questions.length, 0)}</strong> questions</span></span>
			</button>
			<button class="grade-card" data-action="level" data-level="JSS2" type="button">
				<span class="grade-top"><span class="grade-pill jss2">JUNIOR SECONDARY</span><span class="grade-arrow">↗</span></span>
				<h3>JSS2</h3><p>Take the next step with patterns, proportion, constructions and probability.</p>
				<span class="grade-meta"><span><strong>${jss2.length}</strong> topics</span><span><strong>${jss2.reduce((n, topic) => n + topic.questions.length, 0)}</strong> questions</span></span>
			</button>
		</div>

		${lastTopic ? `<div class="section-heading"><div><h2>Keep your momentum</h2><p>Pick up with a topic you've already started.</p></div></div>
			<div class="continue-strip"><div><p class="eyebrow">PICK UP WHERE YOU LEFT OFF</p><h3>${escapeHtml(lastTopic.title)}</h3><p>${lastTopic.level} · ${escapeHtml(lastTopic.strand)}</p></div><button class="button-primary" data-action="topic" data-id="${lastTopic.id}" type="button">Continue <span aria-hidden="true">→</span></button></div>` : ""}
		<p class="syllabus-note">This learning map follows the core themes commonly taught in Nigerian JSS1 and JSS2 mathematics. Schools may arrange some topics differently.</p>`;
}

function renderCurriculum(level = selectedLevel) {
	currentView = "curriculum";
	selectedTopicId = null;
	selectedLevel = level;
	setBreadcrumb("Curriculum");
	view.innerHTML = `
		<div class="view-heading"><div><p class="eyebrow">YOUR LEARNING MAP</p><h1>Curriculum</h1><p>Browse the core topics for each class. Each topic includes a short lesson and six worked questions.</p></div></div>
		<div class="filter-row" role="group" aria-label="Filter by class">
			${["All", "JSS1", "JSS2"].map((item) => `<button class="filter-button ${selectedLevel === item ? "is-active" : ""}" data-action="filter-level" data-level="${item}" type="button" aria-pressed="${selectedLevel === item}">${item === "All" ? "All classes" : item}</button>`).join("")}
			<label class="search-wrap"><span aria-hidden="true">⌕</span><input class="search-input" id="topic-search" type="search" value="${escapeHtml(searchTerm)}" placeholder="Find a topic" aria-label="Find a topic"></label>
		</div>
		<div class="topic-list" id="topic-list"></div>
		<p class="syllabus-note">This learning map follows core Nigerian junior secondary mathematics themes; topic order and emphasis can vary by school and state.</p>`;
	renderTopicList();
}

function renderTopicList() {
	const list = document.querySelector("#topic-list");
	if (!list) return;
	const matches = levelTopics(selectedLevel).filter((topic) => `${topic.title} ${topic.strand} ${topic.level}`.toLowerCase().includes(searchTerm.toLowerCase()));
	if (!matches.length) {
		list.innerHTML = `<div class="empty-state">No topics match “${escapeHtml(searchTerm)}”. Try another search.</div>`;
		return;
	}
	list.innerHTML = matches.map((topic, index) => `
		<button class="topic-card" data-action="topic" data-id="${topic.id}" type="button">
			<span class="topic-index ${topic.level.toLowerCase()}">${String(index + 1).padStart(2, "0")}</span>
			<span class="topic-info"><strong>${escapeHtml(topic.title)}</strong><span>${topic.level} · ${escapeHtml(topic.strand)} · ${topicIsComplete(topic) ? "Completed" : `${topic.questions.length} questions`}</span></span>
			<span class="topic-arrow" aria-hidden="true">→</span>
		</button>`).join("");
}

function renderTopic(topicId) {
	const topic = topicById(topicId);
	if (!topic) return renderCurriculum();
	currentView = "topic";
	selectedTopicId = topicId;
	questionIndex = 0;
	revealed = false;
	feedback = "";
	setBreadcrumb(`${topic.level} / ${topic.title}`);
	view.innerHTML = `
		<button class="back-button" data-action="back-curriculum" type="button"><span aria-hidden="true">←</span> Back to curriculum</button>
		<section class="topic-hero"><div><p class="eyebrow">${topic.level} · ${escapeHtml(topic.strand)}</p><h1>${escapeHtml(topic.title)}</h1><p>Start with the key ideas, then try each question. Reveal a worked answer whenever you need a hint.</p></div><span class="topic-hero-meta">${topic.questions.length} PRACTICE QUESTIONS</span></section>
		<div class="lesson-heading"><h2>Key ideas</h2><span>A quick lesson before you practise</span></div>
		<div class="key-ideas">${topic.lesson.map((idea, index) => `<div class="idea"><span>IDEA 0${index + 1}</span><p>${escapeHtml(idea)}</p></div>`).join("")}</div>
		<div class="practice-header"><h2>Try it yourself</h2><span class="question-count">${topic.questions.length} questions · worked answers included</span></div>
		<div id="question-area"></div>`;
	renderQuestion();
}

function renderQuestion() {
	const topic = topicById(selectedTopicId);
	const area = document.querySelector("#question-area");
	if (!topic || !area) return;
	const [prompt, answer, working] = topic.questions[questionIndex];
	const isComplete = savedProgress.completed.includes(`${topic.id}:${questionIndex}`);
	const completedInTopic = topic.questions.filter((_, index) => savedProgress.completed.includes(`${topic.id}:${index}`)).length;
	area.innerHTML = `
		<div class="question-progress" aria-label="Question ${questionIndex + 1} of ${topic.questions.length}"><span style="width:${(questionIndex + 1) / topic.questions.length * 100}%"></span></div>
		<article class="question-card">
			<div class="question-topline"><span class="question-number">QUESTION ${String(questionIndex + 1).padStart(2, "0")} / ${String(topic.questions.length).padStart(2, "0")}</span>${isComplete ? `<span class="question-done">✓ Completed · ${completedInTopic}/${topic.questions.length}</span>` : ""}</div>
			<p class="question-text">${escapeHtml(prompt)}</p>
			<form class="answer-row" id="answer-form">
				<input class="answer-input" id="answer-input" type="text" autocomplete="off" placeholder="Type your answer" aria-label="Your answer">
				<button class="button-primary" type="submit">Check answer</button>
			</form>
			<p class="answer-feedback ${feedback ? (feedback === "Correct! Nice work." ? "correct" : "incorrect") : ""}" id="answer-feedback" aria-live="polite">${escapeHtml(feedback)}</p>
			<div class="solution ${revealed ? "is-visible" : ""}" id="solution"><strong>Answer & working</strong><p><b>${escapeHtml(answer)}</b>\n${escapeHtml(working)}</p></div>
			<div class="question-actions"><button class="button-secondary" data-action="reveal" type="button">${revealed ? "Hide working" : "Show answer & working"}</button></div>
		</article>
		<div class="question-nav"><button class="button-secondary" data-action="previous-question" type="button" ${questionIndex === 0 ? "disabled" : ""}>← Previous</button><button class="button-secondary" data-action="next-question" type="button">${questionIndex === topic.questions.length - 1 ? "Finish topic" : "Next question →"}</button></div>`;
}

function normalizeAnswer(value) {
	return value.toLowerCase().trim().replace(/[\s,₦]/g, "").replace(/°/g, "").replace(/²/g, "^2").replace(/³/g, "^3");
}

function checkAnswer(event) {
	event.preventDefault();
	const topic = topicById(selectedTopicId);
	const input = document.querySelector("#answer-input");
	if (!topic || !input || !input.value.trim()) {
		if (input) input.focus();
		return;
	}
	const expected = normalizeAnswer(topic.questions[questionIndex][1]);
	const submitted = normalizeAnswer(input.value);
	const isCorrect = expected.split(/\s+or\s+/i).some((option) => submitted === normalizeAnswer(option));
	feedback = isCorrect ? "Correct! Nice work." : "Not quite yet. Check your answer or reveal the worked solution.";
	savedProgress.attempts += 1;
	if (isCorrect && !savedProgress.completed.includes(`${topic.id}:${questionIndex}`)) {
		savedProgress.completed.push(`${topic.id}:${questionIndex}`);
	}
	saveProgress();
	renderQuestion();
	const feedbackElement = document.querySelector("#answer-feedback");
	if (feedbackElement) feedbackElement.focus();
}

function renderPractice() {
	currentView = "practice";
	selectedTopicId = null;
	setBreadcrumb("Practice");
	const topics = curriculum.filter((topic) => !topicIsComplete(topic));
	const selected = topics[0] || curriculum[0];
	view.innerHTML = `
		<div class="view-heading"><div><p class="eyebrow">BUILD YOUR CONFIDENCE</p><h1>Practice</h1><p>Choose any topic and work through its questions at your own pace.</p></div></div>
		<div class="filter-row" role="group" aria-label="Choose a class">
			<button class="filter-button ${selectedLevel === "JSS1" ? "is-active" : ""}" data-action="filter-level" data-level="JSS1" type="button">JSS1</button>
			<button class="filter-button ${selectedLevel === "JSS2" ? "is-active" : ""}" data-action="filter-level" data-level="JSS2" type="button">JSS2</button>
			<button class="filter-button ${selectedLevel === "All" ? "is-active" : ""}" data-action="filter-level" data-level="All" type="button">All classes</button>
			<label class="search-wrap"><span aria-hidden="true">⌕</span><input class="search-input" id="topic-search" type="search" value="${escapeHtml(searchTerm)}" placeholder="Find a topic" aria-label="Find a topic"></label>
		</div>
		<div class="topic-list" id="topic-list"></div>
		<p class="syllabus-note">Answers are checked against the displayed form. Fractions, units and equivalent expressions can be compared with the worked solution if your format differs.</p>`;
	renderTopicList();
}

function renderCurrent() {
	if (currentView === "home") renderHome();
	else if (currentView === "curriculum") renderCurriculum(selectedLevel);
	else if (currentView === "practice") renderPractice();
}

document.addEventListener("click", (event) => {
	const button = event.target.closest("button[data-action]");
	if (!button) return;
	const action = button.dataset.action;
	if (action === "level") renderCurriculum(button.dataset.level);
	if (action === "open-curriculum") renderCurriculum("All");
	if (action === "filter-level") {
		selectedLevel = button.dataset.level;
		if (currentView === "practice") renderPractice();
		else renderCurriculum(selectedLevel);
	}
	if (action === "topic") renderTopic(button.dataset.id);
	if (action === "back-curriculum") renderCurriculum(selectedLevel);
	if (action === "reveal") {
		revealed = !revealed;
		renderQuestion();
	}
	if (action === "previous-question" && questionIndex > 0) {
		questionIndex -= 1;
		revealed = false;
		feedback = "";
		renderQuestion();
	}
	if (action === "next-question") {
		const topic = topicById(selectedTopicId);
		if (questionIndex < topic.questions.length - 1) {
			questionIndex += 1;
			revealed = false;
			feedback = "";
			renderQuestion();
		} else {
			renderCurriculum(topic.level);
		}
	}
});

document.addEventListener("submit", (event) => {
	if (event.target.id === "answer-form") checkAnswer(event);
});

document.addEventListener("input", (event) => {
	if (event.target.id !== "topic-search") return;
	searchTerm = event.target.value;
	renderTopicList();
	const replacement = document.querySelector("#topic-search");
	if (replacement) {
		replacement.focus();
		replacement.setSelectionRange(searchTerm.length, searchTerm.length);
	}
});

document.querySelectorAll(".nav-link").forEach((button) => {
	button.addEventListener("click", () => {
		document.querySelectorAll(".nav-link").forEach((navButton) => navButton.classList.toggle("is-active", navButton === button));
		if (button.dataset.view === "home") renderHome();
		if (button.dataset.view === "curriculum") renderCurriculum("All");
		if (button.dataset.view === "practice") renderPractice();
	});
});

renderHome();
