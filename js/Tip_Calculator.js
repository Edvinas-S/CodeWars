// my try

function calculateTip(amount, rating) {
    rating = rating.toLowerCase();
    if (rating === `terrible`) {
        return 0;
    }
    if (rating === `poor`) {
        return Math.ceil(amount * 0.05);
    }
    if (rating === `good`) {
        return Math.ceil(amount * 0.1);
    }
    if (rating === `great`) {
        return Math.ceil(amount * 0.15);
    }
    if (rating === `excellent`) {
        return Math.ceil(amount * 0.2);
    }
    if (rating !== isFinite) {
        return `Rating not recognised`;
    }
}

// most of user it did with "switch"
/*
function calculateTip(amount, rating) {
    switch(rating.toLowerCase()){
      case "terrible":return 0;
      case "poor":return Math.ceil(amount * 0.05);
      case "good":return Math.ceil(amount * 0.1);
      case "great":return Math.ceil(amount * 0.15);
      case "excellent":return Math.ceil(amount * 0.2);
      default:return "Rating not recognised";
    }
}
*/
console.log(calculateTip(20, "Excellent"),`==> 4`);
console.log(calculateTip(26.95, "good"),`==> 3`);