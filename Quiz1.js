function destCity(paths) {
    // Create a set to store cities with outgoing paths
    const outgoing = new Set(paths.map(path => path[0]));
    
    // Find the city which doesn't have any outgoing path
    for (const path of paths) {
      if (!outgoing.has(path[1])) {
        return path[1];
      }
    }
  }
  