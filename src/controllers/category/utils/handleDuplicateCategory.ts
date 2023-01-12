export function handleDuplicateKey(err: any){
  const { code } = err
  if(code === 11000){
    return 'Category already exists'
  }
}