export default {
    snack: (state, {
        color,
        text
    }) => {
        state.snack.color = color;
        state.snack.text = text;
        state.snack.show = true;
    },
    login: (state, {
        login,
        todo,
        remain
    }) => {
        state.login = login;
        state.todo = todo;
        state.remain = remain;
    },
    dialog: (state, show) => {
        state.dialog = show;
    },
    sub: (state, sub) => {
        state.remain++;
        state.todo.unshift(sub);
    },
    done: (state, item) => {
        let i = state.todo.indexOf(item);
        state.todo.splice(i, 1);
        state.remain--;
    },
    more: (state, {
        done,
        btn,
        me,
        ta
    }) => {
        if (done.length) state.done.push(...done);
        state.me = me;
        state.ta = ta;
        if (!btn) {
            state.btn = btn;
            state.snack.color = "warning";
            state.snack.text = "已展示全部数据~"
            state.snack.show = true;
        }
        state.more++;
    },
    clear: (state) => {
        state.done = [];
        state.more = 0;
        state.btn = true;
    }
}