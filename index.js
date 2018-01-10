class Driver {
  constructor(name, joinDate) {
    this.name = name
    this.setStartDate(joinDate)
  }

  setStartDate(joinDate) {
    const date = joinDate.replace(",","").split(" ")
    const mos = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    this.startDate = new Date(date[2], mos.indexOf(date[0]), date[1])
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    const aves = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    const horiz = Math.abs(aves.indexOf(this.beginningLocation.horizontal) - aves.indexOf(this.endingLocation.horizontal))
    const vert = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    return vert + horiz
  }

  estimatedTime(peakHours) {
    if (peakHours) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }
}
