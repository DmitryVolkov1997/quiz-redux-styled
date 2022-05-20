import {createSlice} from "@reduxjs/toolkit";

const quizSlice = createSlice({
    name: "quiz",
    initialState: {
        results: {},
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                id: 1,
                question: "Предмет информатики — это:",
                rightAnswerId: 3,
                answers: [
                    {
                        id: 1,
                        text: "язык программирования"
                    },
                    {
                        id: 2,
                        text: "устройство робота"
                    },
                    {
                        id: 3,
                        text: "способы накопления, хранения, обработки, передачи информации"
                    },
                    {
                        id: 4,
                        text: "информированность общества"
                    },
                    {
                        id: 5,
                        text: "нет верного ответа"
                    }
                ]
            },
            {
                id: 2,
                question: "Механическое устройство, позволяющее складывать числа, изобрел:",
                rightAnswerId: 2,
                answers: [
                    {
                        id: 1,
                        text: "П. Нортон"
                    },
                    {
                        id: 2,
                        text: "Б. Паскаль"
                    },
                    {
                        id: 3,
                        text: "Г. Лейбниц"
                    },
                    {
                        id: 4,
                        text: "Д. Нейман"
                    },
                    {
                        id: 5,
                        text: "нет верного ответа"
                    }
                ]
            },
            {
                id: 3,
                question: "Первый президент Казахстана",
                rightAnswerId: 1,
                answers: [
                    {
                        id: 1,
                        text: "Назарбаев"
                    },
                    {
                        id: 2,
                        text: "Токаев"
                    },
                    {
                        id: 3,
                        text: "Путин"
                    },
                    {
                        id: 4,
                        text: "Ельцин"
                    },
                    {
                        id: 5,
                        text: "Сталин"
                    }
                ]
            },
        ],
        isFinishedQuiz: false,
        menu: false,
    },
    reducers: {
        onAnswerClickHandler(state, {payload}) {
            if (state.answerState) {
                const key = Object.keys(state.answerState)[0];
                if (state.answerState[key] === "success") {
                    return;
                }
            }

            const question = state.quiz[state.activeQuestion];
            const results = state.results;

            const isFinishedQuiz = () => {
                return state.quiz.length === state.activeQuestion + 1;
            };

            if (question.rightAnswerId === payload.id) {
                if (!results[question.id]) {
                    results[question.id] = "success";
                }
                state.results = results;
                state.answerState = {[payload.id]: "success"};
                if (isFinishedQuiz()) {
                    state.isFinishedQuiz = true;
                } else {
                    state.activeQuestion = state.activeQuestion + 1;
                    state.answerState = null;
                }
            } else {
                results[question.id] = "error";
                state.results = results;
                state.answerState = {[payload.id]: "error"};
            }
        },
        onRetryHandler(state) {
            state.answerState = null;
            state.activeQuestion = 0;
            state.isFinishedQuiz = false;
            state.results = {};
        },
        toggleMenuHandler(state, {payload}) {
            state.menu = !state.menu;
        },
        menuCloseHandler(state, {payload}) {
            state.menu = false;
        }
    }
});

export const {onAnswerClickHandler, onRetryHandler, toggleMenuHandler, menuCloseHandler} = quizSlice.actions;
export default quizSlice.reducer;