class TimeMap {
    constructor() {
        this.store = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.store.has(key)) this.store.set(key, [])

        this.store.get(key).push({ value, timestamp })
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.store.has(key)) return ""

        const list = this.store.get(key), frontElem = list[0]

        if (frontElem.timestamp > timestamp) return ""

        let lPtr = 0, rPtr = list.length - 1

        while(lPtr <= rPtr) {
            const mid = lPtr + Math.floor((rPtr - lPtr) / 2),
                currTimestamp = list[mid].timestamp
            if(currTimestamp == timestamp) {
                return list[mid].value
            } else if (currTimestamp > timestamp) {
                rPtr = mid - 1
            } else {
                lPtr = mid + 1
            }
        }

        return list[rPtr].value
    }
}
