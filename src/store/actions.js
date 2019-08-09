import axios from "axios";
import qs from "qs";
import router from "./../router.js";

export default {
    login: ({
        commit
    }, login) => {
        axios
            .post("/todo/php/login.php", qs.stringify({
                login
            }))
            .then(res => {
                if (res.data.login) {
                    if (res.data.status)
                        commit("login", res.data);
                    else
                        commit("snack", {
                            color: "error",
                            text: "获取数据失败！"
                        });
                    router.replace("/todo");
                } else throw res;
            })
            .catch(res => {
                window.console.log(res);
                commit("snack", {
                    color: "error",
                    text: "网络连接超时！"
                });
            });
    },
    dialog: ({
        commit
    }, show) => {
        commit("dialog", show);
    },
    // weather: ({
    //     commit
    // }) => {
    //     let key = "71bbf31a7e650fb722a34632b8ef6244";
    //     let weather = "good";
    //     axios
    //         .get(`http://restapi.amap.com/v3/ip?key=${key}`)
    //         .then(res => {
    //             window.console.log(res);
    //             if (res.data.status)
    //                 return axios.get(`http://restapi.amap.com/v3/weather/weatherInfo?city=${res.data.adcode}&key=${key}&extensions=all`);
    //             else throw res;
    //         })
    //         .then(res => {
    //             if (res.data.status) {
    //                 const [today, tomorrow] = res.data.forecasts.casts;
    //                 if (tomorrow.dayweather.includes("雨")) {
    //                     weather = "rain";
                        
    //                 }
    //                 return axios.get("/todo/care.json");
    //             } else throw res;
    //         })
    //         .catch(res => {
    //             window.console.log(res);
    //             commit("snack", {
    //                 color: "error",
    //                 text: "获取天气数据失败！"
    //             });
    //         });
    // },
    sub: ({
        commit
    }, sub) => {
        axios
            .post("/todo/php/sub.php", qs.stringify(sub))
            .then(res => {
                if (res.data.status) {
                    commit("sub", sub);
                    commit("dialog", false);
                    if (res.data.all >= 5)
                        commit("snack", {
                            color: "warning",
                            text: `该日待办事项以及有${res.data}件了，也要记的好好休息哦~`
                        });
                } else throw res;
            })
            .catch(res => {
                window.console.log(res);
                commit("snack", {
                    color: "error",
                    text: "给自己适当的放松也不错哦~"
                });
            })
    },
    done: ({
        commit
    }, item) => {
        let date = new Date();
        let time = date.toTimeString().substr(0, 5);
        date = date.toISOString().substr(0, 10)
        item.out = item.date < date || (item.date == date && item.time < time);
        item.time = time;
        item.date = date;
        axios
            .post("/todo/php/done.php", qs.stringify({
                date: date,
                time: time,
                id: item.id,
                out: item.out
            }))
            .then(res => {
                if (res.data) {
                    commit("snack", {
                        color: "info",
                        text: "完成了！要继续加油哦~"
                    });
                    commit("done", item);
                } else throw res
            })
            .catch(res => {
                window.console.log(res);
                commit("snack", {
                    color: "error",
                    text: "完成失败了，先确认网络。"
                });
            })
    },
    more: ({
        commit
    }, more) => {
        if (more.more == 0) commit("clear");
        axios
            .post("/todo/php/more.php", qs.stringify(more))
            .then(res => {
                if (res.data.status)
                    commit("more", res.data);
                else throw res;
            })
            .catch(res => {
                window.console.log(res);
                commit("snack", {
                    color: "error",
                    text: "加载失败了，先确认网络。"
                });
            });
    }
};