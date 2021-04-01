export async function getQuestions(authToken){
    const response = await fetch('/api/questions',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    if (!response.ok) throw Error('Incorrect username/password');
    const questions = await response.json();
    return questions
};


export async function performAuth(name, password){
    const authString = btoa(`${name}:${password}`);
    const response = await fetch('/api/token',{
        method: 'POST',
        headers: {
            // 'Authorization': `Basic ${authString}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: name,
            password
        }),
    });
    if (!response.ok) throw Error('Incorrect username/password');
    const token = (await response.json()).token;
    return token;
};


export async function submitAnswer(question_id, answer, authToken){
    const response = await fetch('/api/submitAnswer',{
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            question_id,
            answer
        }),
    });
    const isCorrect = (await response.json()).isCorrect;
    return isCorrect;
};