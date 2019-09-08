package model

type AppState struct {

	Cards []*card
}

type card struct {
	Title  string
	Text   string
	Labels []string
}
