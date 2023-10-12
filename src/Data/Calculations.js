export function convertToPercentageByCategory(expenses) {
    // Create an object to store total expenses per category
    const totalExpensesByCategory = {};
  
    // Calculate total expenses per category
    expenses.forEach(expense => {
      const { category, amount } = expense;
      if (!totalExpensesByCategory[category]) {
        totalExpensesByCategory[category] = 0;
      }
      totalExpensesByCategory[category] += amount;
    });
  
    // Calculate the total expenses across all categories
    const totalExpense = Object.values(totalExpensesByCategory).reduce((total, amount) => total + amount, 0);
  
    // Calculate percentages and format the data for the Wheel Chart
    const percentageByCategoryData = Object.entries(totalExpensesByCategory).map(([category, amount]) => ({
      category,
      percentage: Math.floor((amount / totalExpense)*10000)/100,
    }));
  
    return percentageByCategoryData;
  }