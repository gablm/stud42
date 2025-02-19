package cmd

import (
	"os"

	"github.com/getsentry/sentry-go"
	"github.com/rs/zerolog/log"
	"github.com/spf13/cobra"

	"github.com/42atomys/stud42/internal/pkg/searchengine"
	"github.com/42atomys/stud42/internal/webhooks"
)

// webhooksCmd represents the webhooks command
var webhooksCmd = &cobra.Command{
	Use:   "webhooks",
	Short: "webhooks process incoming webhooks from AMQP queue \"webhooks\"",
	PreRun: func(cmd *cobra.Command, args []string) {
		searchengine.Initizialize()
	},

	Run: func(cmd *cobra.Command, args []string) {
		var amqpURL = os.Getenv("AMQP_URL")
		if amqpURL == "" {
			log.Fatal().Msg("AMQP_URL not set")
		}

		if err := webhooks.New().Serve(amqpURL, "webhooks.processing"); err != nil {
			sentry.CaptureException(err)
			log.Fatal().Err(err).Msg("failed to start rabbitmq consumer")
		}
	},
}

func init() {
	jobsCmd.AddCommand(webhooksCmd)
}
