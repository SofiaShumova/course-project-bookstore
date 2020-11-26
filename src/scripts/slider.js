const slider = {
    state: {
        first: 0,
        last: 0,
    },
    increment: function() {
        if (this.state.last + this.step > this.data.length - 1) {
            return;
        }
        this.state.first = this.state.last + 1;
        this.state.last = this.callback(this.state.last + 1);
        this.check();
    },
    decrement: function() {
        if (this.state.first === 0) {
            return;
        }
        this.state.first = this.state.first - this.step;
        this.state.last = this.callback(this.state.first);
        this.check();
    },
    check: function() {
        if (
            this.state.first === 0 &&
            this.state.last + this.step > this.data.length - 1
        ) {
            this.buttons.right.style.visibility = 'hidden';
            this.buttons.left.style.visibility = 'hidden';
            return;
        } else if (this.state.last + this.step > this.data.length - 1) {
            this.buttons.right.style.visibility = 'hidden';
            this.buttons.left.style.visibility = 'visible';
            return;
        } else if (this.state.first === 0) {
            this.buttons.left.style.visibility = 'hidden';
            this.buttons.right.style.visibility = 'visible';
            return;
        }

        this.buttons.left.style.visibility = 'visible';
        this.buttons.right.style.visibility = 'visible';
    },
    init: function(callback, data, step, rightButton, leftButton) {
        this.buttons.right = rightButton;
        this.buttons.left = leftButton;
        this.callback = callback;
        this.data = data;
        this.step = step;
        this.state.last = this.callback(this.state.first);
        this.check();
        this.buttons.right.onclick = () => {
            slider.increment();
        };
        this.buttons.left.onclick = () => {
            slider.decrement();
        };
    },
    callback: null,
    data: [],
    step: 0,
    buttons: {
        right: null,
        left: null,
    },
};