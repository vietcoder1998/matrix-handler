function Matrix2x2(y, x) {
    this.value = [];
    this.x = x;
    this.y = y;
    this.init = () => {
        let row = new Array(this.x);

        for (let i = 0; i < this.y; i++) {
            this.value.push(row)                  
        }
        value.map(() => {
            return new Array(this.x);
        });

		this.value = value
    };
    console.log('value is', this.value)
    this.init();
    this.set = (value) => {
        if (!value) {
            return -1;
        }
        value.forEach((row, rIndex) => {
            if (row && row.length > 0) {
                row.forEach((item, cIndex) => {
					if (rIndex <= this.value.length) {
						console.log(row, this.value[rIndex]);
                        if (cIndex <= this.value[rIndex]) {
                            this.value[rIndex][cIndex] = item;
                            console.log(this.value[rIndex][cIndex]);
                        }
                    }
                });
            }
        });

        console.log(value, this.value);

        return 1;
    };

    this.reset = () => {
        this.data = [];
    };
    this.getRow = () => {
        if (this.data.length === 0) {
            return data.length;
        }
    };
    this.includes = (arrayChild) => {
        const result = [];
        this.data.forEach((row, rIndex) => {
            const temp = arrayChild.reduce(
                (a, b, index) => a + (b === row[index] ? 1 : 0),
                0
            );
            if (temp === arrayChild.length) {
                result.push(rIndex);
            }
        });

        return [result.length > 0, result];
    };
    this.getRow = (y) => {
        if (y > this.data.length || y < -1) {
            return;
        }
        return this.data[y];
    };
    this.getColumn = (x) => {
        const result = [];
        this.data.forEach((row) => {
            row.forEach((item, index) => {
                if (x === index) {
                    result.push(item);
                }
            });
        });
        return result;
    };
    this.getValue = (x, y) => {
        if (isNaN(x) || isNaN(y)) {
            return;
        }
        const row = this.getRow(y);
        if (x < 0 || x > row.length) {
            return;
        }
        return row[x];
    };
    this.log = () => {
        console.log(this);
    };
    this.check = (inp) => {
        const result = [];
        this.data.forEach((row, rIndex) => {
            row.forEach((item, cIndex) => {
                if (item === inp) {
                    result.push([cIndex, rIndex]);
                }
            });
        });
        return result;
    };
    this.multiple;

    return this;
}

module.exports = Matrix2x2;
