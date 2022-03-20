module.exports = {
    format_date: (date) => {
        // Format date as locale date string; depends on system setting.
        return date.toLocaleDateString();
    },
    is_same: (a, b, options) => {
        if (a == b) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        };
    }
};