namespace :db do
  desc "Reset project data"
  task :reseed => :environment do
    ActiveRecord::Base.connection.execute("TRUNCATE TABLE categories")
    ActiveRecord::Base.connection.execute("ALTER SEQUENCE categories_id_seq RESTART WITH 1")
    ActiveRecord::Base.connection.execute("DELETE FROM users WHERE id > 2")
    ActiveRecord::Base.connection.execute("TRUNCATE TABLE projects")
    ActiveRecord::Base.connection.execute("ALTER SEQUENCE projects_id_seq RESTART WITH 1")
    ActiveRecord::Base.connection.execute("TRUNCATE TABLE rewards")
    ActiveRecord::Base.connection.execute("ALTER SEQUENCE rewards_id_seq RESTART WITH 1")
    ActiveRecord::Base.connection.execute("TRUNCATE TABLE rewardings")
    ActiveRecord::Base.connection.execute("ALTER SEQUENCE rewardings_id_seq RESTART WITH 1")
    Rake::Task["db:seed"].invoke
  end
end
