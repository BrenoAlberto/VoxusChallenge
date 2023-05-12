export function measurePerformance (label: string, fn: any, args: any, numberOfRuns: number) {
    let totalTime = 0
  
    for (let i = 0; i < numberOfRuns; i++) {
      const startTime = performance.now()
  
      fn(...args)
  
      const endTime = performance.now()
      totalTime += endTime - startTime
    }
  
    const averageTime = totalTime / numberOfRuns
  
    const labelColor = '\x1b[36m%s\x1b[0m' // Cyan
    const greenValueColor = '\x1b[32m%s\x1b[0m'
    const redValueColor = '\x1b[31m%s\x1b[0m'
  
    const timeFormatted = averageTime > 1000 ? `${(averageTime / 1000).toFixed(4)} s` : `${averageTime.toFixed(4)} ms`
    const valueColor = averageTime > 1000 ? redValueColor : greenValueColor
  
    console.group(`\n${labelColor}`, label)
    console.log(`Average runtime (${numberOfRuns} runs): ${valueColor}`, timeFormatted)
    console.groupEnd()
  }