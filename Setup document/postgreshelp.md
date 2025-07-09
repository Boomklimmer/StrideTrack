# PostgreSQL Setup Help - StrideTrack Project

## Database Credentials

### PostgreSQL Superuser (postgres)
- **Username:** postgres
- **Password:** Ryan19931209!1
- **Host:** localhost
- **Port:** 5432

## Connection Commands

### Connect to PostgreSQL as superuser
```bash
psql -U postgres
```
When prompted, enter: `Ryan19931209!1`

### Connect to specific database
```bash
psql -U postgres -d stridetrack
```

### Connect with host specification
```bash
psql -U postgres -h localhost
```

## Database Setup Commands

### Create StrideTrack Database
```sql
CREATE DATABASE stridetrack;
```

### List all databases
```sql
\l
```

### Connect to StrideTrack database
```sql
\c stridetrack
```

### Exit PostgreSQL
```sql
\q
```

## Environment Variables for Backend

Add these to your `.env` file in the backend directory:
```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=stridetrack
DB_USER=postgres
DB_PASSWORD=Ryan19931209!1
```

## Troubleshooting

### If "psql is not recognized"
1. Restart your computer after installation
2. Or add to PATH: `C:\Program Files\PostgreSQL\17\bin`

### If "Connection refused"
1. Open Services (Windows + R, type `services.msc`)
2. Find "PostgreSQL" service
3. Make sure it's running

### If "Authentication failed"
- Make sure you're using the correct password: `Ryan19931209!1`
- Try: `psql -U postgres -h localhost`

## Security Notes

⚠️ **Important:** 
- This file contains sensitive information
- Keep this file secure and don't share it publicly
- Consider deleting this file after setup is complete
- Use environment variables in your application code

## Next Steps

1. Install PostgreSQL driver in backend: `npm install pg @types/pg`
2. Create the stridetrack database
3. Set up database tables (Users, WeeklySubmissions, BonusChallenges)
4. Test database connection from backend

---
*Created for StrideTrack project setup - Keep this information secure!* 