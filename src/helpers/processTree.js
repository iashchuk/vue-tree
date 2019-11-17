export const filterTree = (func, tree) => {
  if (!func(tree)) {
    return null;
  }

  if (!tree.children) {
    return tree;
  }

  return {
    ...tree,
    children: tree.children.map(item => filterTree(func, item)).filter(Boolean)
  };
};

export const updateTree = (func, tree, value) => {
  if (func(tree)) {
    return { ...tree, ...value };
  }

  if (!tree.children) {
    return tree;
  }

  return {
    ...tree,
    children: tree.children.map(item => updateTree(func, item, value))
  };
};
