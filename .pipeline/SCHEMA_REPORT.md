# SCHEMA_REPORT.md: pipeline-test
## Supabase Project
- Project ID: giowxgvxslufltgblgai
- Region: eu-west-2
- URL: https://giowxgvxslufltgblgai.supabase.co
- Anon Key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdpb3d4Z3Z4c2x1Zmx0Z2JsZ2FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2MDQ1ODksImV4cCI6MjA5MDE4MDU4OX0._s8sjpLQR_MG844nT9aUwRrsMPDtzexkta-qknC6xUI
## Schema: tasks table
| Column | Type | Constraints | Default |
|--------|------|-------------|---------|
| id | uuid | PRIMARY KEY | gen_random_uuid() |
| title | text | NOT NULL | - |
| is_complete | boolean | NOT NULL | false |
| created_at | timestamptz | NOT NULL | now() |
## RLS
Disabled
## Environment Variables
NEXT_PUBLIC_SUPABASE_URL=https://giowxgvxslufltgblgai.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdpb3d4Z3Z4c2x1Zmx0Z2JsZ2FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2MDQ1ODksImV4cCI6MjA5MDE4MDU4OX0._s8sjpLQR_MG844nT9aUwRrsMPDtzexkta-qknC6xUI
