function largest(n, array) {
   return [...array].sort((a, b) => a - b).splice(array.length - n)
    }

