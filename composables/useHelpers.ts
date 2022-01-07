export const minutesToHours = (time: number) => {
    const hours = time / 60
    const rhours = Math.floor(hours)
    const minutes = (hours - rhours) * 60
    const rminutes = Math.round(minutes)
    return rhours + 'h ' + rminutes + 'min'
}

export const dateToString = (date: string, lang: string) => {
        const timestamp = new Date(date)
        const mois = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre']
        const month = ['January','February','March','April','May','June','July','August','September','October','November','December']
        if (lang === 'fr')
          return `${timestamp.getDate()} ${mois[timestamp.getMonth()]} ${timestamp.getFullYear()}`
        if (lang === 'en')
          return `${month[timestamp.getMonth()]} ${timestamp.getDate()}, ${timestamp.getFullYear()}`
}