package model

type AppState struct {
	Cards []*card `json:"cards"`
}

type card struct {
	Title  string `json:"title"`
	Text   string `json:"text"`
	Labels []string `json:"labels"`
}
