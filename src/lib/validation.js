export function validateAppoint(appoint) {
    const date = new Date().getTime() + (15 * 60 * 1000);
    const nextApp= new Date(appoint.createdAtDate).getTime()
  
    if(nextApp < date) return false
    return true
}