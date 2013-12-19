# Generated by jeweler
# DO NOT EDIT THIS FILE DIRECTLY
# Instead, edit Jeweler::Tasks in Rakefile, and run 'rake gemspec'
# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "zip-container"
  s.version = "0.9.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Robert Haines"]
  s.date = "2013-12-19"
  s.description = "A Ruby library for working with ZIP Container Format files. See http://www.idpf.org/epub/30/spec/epub30-ocf.html for the OCF specification and https://learn.adobe.com/wiki/display/PDFNAV/Universal+Container+Format for the UCF specification."
  s.email = ["support@mygrid.org.uk"]
  s.extra_rdoc_files = [
    "Changes.rdoc",
    "Licence.rdoc",
    "ReadMe.rdoc"
  ]
  s.files = [
    "Changes.rdoc",
    "Licence.rdoc",
    "Rakefile",
    "ReadMe.rdoc",
    "examples/create-zip-container",
    "examples/verify-zip-container",
    "examples/zip-container-info",
    "lib/zip-container.rb",
    "lib/zip-container/container.rb",
    "lib/zip-container/entries/directory.rb",
    "lib/zip-container/entries/entry.rb",
    "lib/zip-container/entries/file.rb",
    "lib/zip-container/entries/managed.rb",
    "lib/zip-container/entries/reserved.rb",
    "lib/zip-container/exceptions.rb",
    "test/data/compressed_mimetype.container",
    "test/data/empty.container",
    "test/data/empty.zip",
    "test/data/example.container",
    "test/data/null.file",
    "test/tc_create.rb",
    "test/tc_managed_entries.rb",
    "test/tc_read.rb",
    "test/tc_reserved_names.rb",
    "test/ts_container.rb",
    "version.yml",
    "zip-container.gemspec"
  ]
  s.homepage = "http://mygrid.github.io/ruby-zip-container/"
  s.rdoc_options = ["-N", "--tab-width=2", "--main=ReadMe.rdoc"]
  s.require_paths = ["lib"]
  s.rubygems_version = "1.8.21"
  s.summary = "A ZIP Container for use by OCF and UCF implementations"
  s.test_files = ["test/ts_container.rb"]

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<rake>, ["~> 10.0.4"])
      s.add_development_dependency(%q<rdoc>, ["~> 4.0.1"])
      s.add_development_dependency(%q<jeweler>, ["~> 1.8.4"])
      s.add_runtime_dependency(%q<rubyzip>, ["~> 1.0.0"])
    else
      s.add_dependency(%q<rake>, ["~> 10.0.4"])
      s.add_dependency(%q<rdoc>, ["~> 4.0.1"])
      s.add_dependency(%q<jeweler>, ["~> 1.8.4"])
      s.add_dependency(%q<rubyzip>, ["~> 1.0.0"])
    end
  else
    s.add_dependency(%q<rake>, ["~> 10.0.4"])
    s.add_dependency(%q<rdoc>, ["~> 4.0.1"])
    s.add_dependency(%q<jeweler>, ["~> 1.8.4"])
    s.add_dependency(%q<rubyzip>, ["~> 1.0.0"])
  end
end

