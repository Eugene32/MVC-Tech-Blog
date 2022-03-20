module.exports = {
    format_date: (date) => {
        // Format date as locale date string; depends on system setting.
        return date.toLocaleDateString();
    },
    is_same: (a, b, opts) => {
        if (a == b) {
            return opts.fn(this);
        } else {
            return opts.inverse(this);
        };
    }
};